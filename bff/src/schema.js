import  {buildSchema} from 'graphql';

// Construct a schema, using GraphQL schema language
 export const schema = buildSchema(`
  type Query {
    customer: Customer
  }
  type Customer{
    id: String,
    name: String,
    email: String,
    age: Int
  }
`);
