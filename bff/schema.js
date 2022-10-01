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

//Hardcoded data
const customers = [
    {id: '1' , name: 'John Doe', email: 'jdoe@gmail.com' , age: 30 }
]
const CustomerType =  new GraphQLObjectType({
    name: 'Customer',
    fields:{
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt}
    }
});

const BUSINESS_TYPE = new GraphQLObjectType({
    name: 'Customer',
    fields:{
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt}
    }
})

/** QUERIES LIST */
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields:{
        customer: {
            type: CustomerType,
            args:{
                id: {type: GraphQLString}
            },
            resolve(parentValue, args){
                //FOLDER data-sources
                for(let i=0; i<customers.length; i++){
                    if(customers[i].id == args.id){
                        return customers[i];
                    }
                }
            }
        },
        
    },

});

const SecondQuery = new GraphQLObjectType({
    name: "SecondQueryType",
    fields:{
        customers: {
            type: CustomerType,
            resolve(parentValue, args){
                //FOLDER data-sources
                for(let i=0; i<customers.length; i++){
                    if(customers[i].id == args.id){
                        return customers[i];
                    }
                }
            }
        },
        customer: {
            type: CustomerType,
            args:{
                id: {type: GraphQLString}
            },
            resolve(parentValue, args){
                //FOLDER data-sources
                for(let i=0; i<customers.length; i++){
                    if(customers[i].id == args.id){
                        return customers[i];
                    }
                }
            }
        },
        business: {
            type: CustomerType,
            args:{
                id: {type: GraphQLString}
            },
            resolve(parentValue, args){
                //FOLDER data-sources
                for(let i=0; i<customers.length; i++){
                    if(customers[i].id == args.id){
                        return customers[i];
                    }
                }
            }
        }
    },

});

const schema = new GraphQLSchema({
    query: RootQuery
})

export default schema;