require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const ContentfulAPI = require('./datasources/contentful');
const OrdercloudAPI = require('./datasources/ordercloud');
const resolvers = require('./resolvers');
const isEmail = require('isemail');
const config = require('./config.js');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        contentfulAPI : new ContentfulAPI(config),
        ordercloudAPI : new OrdercloudAPI(config),
    }) 
});

server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/dev
    `);
  });