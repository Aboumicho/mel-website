import { ApolloServer } from "apollo-server-express";
import express from "express";
import dataSources from "../data-sources";
import context from "../context";
import resolvers from "../resolvers";
import typeDefs from "../graphql/schema.gql"
import cors from 'cors';
import {graphqlUploadExpress} from 'graphql-upload';

const config = {
    context,
    dataSources,
    resolvers,
    typeDefs,
    introspection: true
}
const server = new ApolloServer(config)

var corsOptions = {
    origin: '*',
    //  credentials: true
}
const app = express();
app.use(cors(corsOptions));
app.use(graphqlUploadExpress({maxFileSize: 2500000 , maxFiles: 20}))
app.use("http://localhost:5000/bff/graphql" , (res, err)=>{
    if(err){
        console.log("Error using url ");
    }
    
})
server.start().then(res => {
    server.applyMiddleware({app , path:"/bff/graphql"});
}) 
export {server, app}