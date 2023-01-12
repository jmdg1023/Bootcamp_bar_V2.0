const { User, Booking } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .select("-password")
          .populate("bookings");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    // mutation for adding new user
    addUser: async (parent, { input }) => {
      const user = await User.create(input);
      const token = signToken(User);

      return { token, user };
    },
    // mutation for logging in
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    // mutation for adding booking
    addBooking: async (parent, { input }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        const user = context.user._id;
        const booking = await Booking.create({ ...input, user });

        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $push: { bookings: booking },
          }
        ).populate("bookings");
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError("You need to be logged in!");
    },
    // mutation for deleting booking
    deleteBooking: async (parent, { bookingId }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        const booking = await Booking.findOneAndDelete({ _id: bookingId });

        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { bookings: booking._id },
          }
        ).populate("bookings");
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
