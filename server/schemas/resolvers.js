const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).select("-password");
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
  },
};

module.exports = resolvers;
