import { ApolloServer } from "apollo-server-express";
import express from "express";
import dataSources from "../data-sources";
import context from "../context";
import resolvers from "../resolvers";
import typeDefs from "../graphql/schema.gql"

const config = {
    context,
    dataSources,
    resolvers,
    typeDefs
}
const server = new ApolloServer(config)
const app = express();

server.start().then(res => {
    server.applyMiddleware({app , path:"/bff/graphql"});
}) 

export {server, app}