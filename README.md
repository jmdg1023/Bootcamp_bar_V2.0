# Bootcamp_bar_V2.0

## Deployment link

<https:///>

## Table of Contents

- [Project Description](#description)
- [Installation information](#Installation)
- [Credits](#Credits)
- [Extra Info](#Info)
- [Future Development](#future-development)
- [Contributors](#contributors)
- [License](#license)

## Project Description

 This application allows users to make a reservation online for a seat at the Bootcamp Bar. Features include:

- 24 hour usage and response
- When a user signs up for an account, a confirmation email is sent to the user
- Automatically tests for capacity when the user attempts to make a reservation, will not allow the user to make a reservation if the capacity is full
- User can add, delete and modify cart
- Admin portal log in
- Drinks menu page with upvote and downvote

## Credits

Third-party resources used:

- Normalise CSS (reset css stylesheet): <https://github.com/necolas/normalize.css>
- Nodemailer: <https://nodemailer.com/about/>
- Bycrypt: <https://www.npmjs.com/package/bcrypt>
- Dotenv: <https://www.npmjs.com/package/dotenv>
- Eslint:<https://www.npmjs.com/package/eslint>
- Express JS: <https://expressjs.com/>
- Handlebars: <https://handlebarsjs.com/>
- mySQL2: <https://www.npmjs.com/package/mysql2>
- moment JS: <https://momentjs.com/>

## Extra Info

### Capacity API functionality

Returns the number of available seats by seating time.

POST /api/capacity

```json
{
  "date": "07/11/2022"
}
```

Response

```json
{
  "6PM": 30,
  "8PM": 30
}
```

## Future Development

Features that would be included in future development:

- When users choose to subscribe to the Newsletter, they are sent a monthly email with an overview of events and info for the bar
- Online bills and payments/credit system
- Mobile app

## Contributors

Janine [Github](https://github.com/jmdg1023)

- Sign up, Log in/out
- eslint
- jawsDB
- Heroku Deployment

Anisha [Github](https://github.com/anisha-sapkota)

- Seeds and Models
- Connecting API
- Capacity API
- Reservation/booking logic

Salina [Github](https://github.com/slingshort)

- UI/Handlebars
- Connecting routes and API to UI
- NPM nodemailer
- Booking logic

## License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT), please click on the link to find out more.
