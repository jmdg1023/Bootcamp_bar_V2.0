import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($input: AddUserInput!) {
    addUser(input: $input) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_BOOKING = gql`
  mutation addBooking($input: AddBookingInput!) {
    addBooking(input: $input) {
      firstName
      lastName
      email
      bookings {
        _id
        date
        seats
        seating
      }
    }
  }
`;
