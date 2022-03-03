const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Setup Config File
dotenv.config({
  path: './config/config.env',
});

// Use Environment with Database
const connectionString = process.env.DATABASE_STRING.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
