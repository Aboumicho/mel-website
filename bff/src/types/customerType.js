import {
    GraphQLObjectType, 
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    // @ts-ignore
    GraphQLList,
    // @ts-ignore
    GraphQLNonNull
}  from "graphql";


const CustomerType =  new GraphQLObjectType({
    name: 'Customer',
    fields:{
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt}
    }
});