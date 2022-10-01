import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink } from '@apollo/client';
import { onError } from 'apollo-link-error';

const ApolloConfig = (props) => {

  const GRAPHQL_URL = 'http://localhost:4000/';

  const httpLink = new HttpLink({
    uri: GRAPHQL_URL,
    // headers: {
    //   authorization: `Bearer ${
    //     process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    //   }`,
    // },
  });
  
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }
  
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });
  
  const link = ApolloLink.from([errorLink, httpLink]);
  
  const cache = new InMemoryCache();
  
  const client = new ApolloClient({
    link,
    cache,
  });
    

    return (
        <ApolloProvider client={client}>
            {props.children}
      </ApolloProvider>
    );
}

export default ApolloConfig