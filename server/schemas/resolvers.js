const { User, Booking, Category, Product } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const email = require('../utils/email');
const moment = require('moment-timezone');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .select('-password')
          .populate('bookings');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    categories: async () => Category.find(),
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return Product.find(params).populate('category');
    },
    product: async (parent, { id }) =>
      Product.findById(id).populate('category'),
  },
  Mutation: {
    // mutation for adding new user
    addUser: async (parent, { input }) => {
      const user = await User.create(input);
      const token = signToken(user);

      // call function to send confirmation email in background
      email.sendConfirmation(user.email, user.firstName);

      return { token, user };
    },
    // mutation for logging in
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    // mutation for adding booking
    addBooking: async (parent, { input }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        const booking = await Booking.create({
          ...input,
          user: context.user._id,
        });

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $push: { bookings: booking },
          },
          {
            new: true,
          }
        ).populate('bookings');

        // call function to send booking confirmation email in background
        email.sendBookingConfirmation(
          user.email,
          user.firstName,
          moment(booking.date).tz('Australia/Sydney').format('DD/MM/YYYY'),
          booking.seating,
          booking.seats
        );

        return user;
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // mutation for deleting booking
    deleteBooking: async (parent, { bookingId }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        const booking = await Booking.findOneAndDelete({ _id: bookingId });

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { bookings: booking._id },
          },
          {
            new: true,
          }
        ).populate('bookings');

        // call function to send booking cancellation email in background
        email.sendBookingCancellation(
          user.email,
          user.firstName,
          moment(booking.date).tz('Australia/Sydney').format('DD/MM/YYYY'),
          booking.seating,
          booking.seats
        );

        return user;
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
