const express = require('express');
const { ApolloServer } = require('apollo-server-express');
var bodyParser = require('body-parser');

const mongoose = require('./config/database'); 
mongoose.set('useCreateIndex', true);

const typeDefs = require('./modules/graphqlSchema.js');

const resolvers = require('./modules/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

server.applyMiddleware({ app });

server.graphqlPath = "/hello";
// app.listen({ port: 3000 }, () => {
//     console.log(`Server running on http://localhost:3000${server.graphqlPath}`);
// });
app.listen(4000);