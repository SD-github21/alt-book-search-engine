const express = require('express');
// Import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// Import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

// -----OLD CODE
// const path = require('path');
// const routes = require('./routes');
// -----OLD CODE

const PORT = process.env.PORT || 3001;
// Create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // Integrate our Apollo server with the GraphQL schema
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      // Log where we can go to test our GQL API
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
   })
  };

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
  


// ------------------------OLD CODE
// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }
// app.use(routes);
// ------------------------OLD CODE

