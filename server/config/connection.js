const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://bootcampbar123:Q8zK7ixWfK1AVgGk@cluster0.3vfjcwv.mongodb.net/bootcamp_bar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
