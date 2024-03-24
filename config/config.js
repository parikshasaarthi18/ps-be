require('dotenv').config();

const mongooseUrl = process.env.mongoosURI;

module.exports = mongooseUrl;