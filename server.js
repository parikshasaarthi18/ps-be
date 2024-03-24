const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');


const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongooseUrl = require('./config/config');

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });

  app.use((req, res) => {
    res.send('this one from express apollo server');
  });

  await mongoose.connect(mongooseUrl);
  console.log('MongoDB Connected...')

  app.listen(process.env.PORT || 8081, () => console.log('Server started at port 8080'));
}

startServer();