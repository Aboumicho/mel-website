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


export const CustomerType =  new GraphQLObjectType({
    name: 'Customer',
    fields:{
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt}
    }
});

export const BUSINESS_TYPE = new GraphQLObjectType({
    name: 'Customer',
    fields:{
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt}
    }
})