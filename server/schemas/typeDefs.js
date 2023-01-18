const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Booking {
    _id: ID
    date: String
    seats: Int
    seating: String
    user: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    isSubscriber: Boolean
    bookings: [Booking]
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    category: Category
  }

  type Auth {
    token: ID
    user: User
  }

  input AddUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    isSubscriber: Boolean!
  }

  input AddBookingInput {
    date: String!
    seats: Int!
    seating: String!
  }

  type Query {
    me: User
    categories: [Category]
    prodeucts(category: ID, name: String): [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(input: AddUserInput!): Auth
    addBooking(input: AddBookingInput!): User
    deleteBooking(bookingId: ID!): User
  }
`;

module.exports = typeDefs;
