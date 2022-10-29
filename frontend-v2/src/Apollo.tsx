import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink } from '@apollo/client';
import { onError } from 'apollo-link-error';

interface Props{
    children: any
}

const ApolloConfig = (props : Props) => {

  const GRAPHQL_URL = 'http://localhost:5000/bff/';

  const httpLink = new HttpLink({
    uri: GRAPHQL_URL,
    // headers: {
    //   authorization: `Bearer ${
    //     process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    //   }`,
    // },
  });
  
  const errorLink: any = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }
  
    // if (networkError) {
    //   console.log(`[Network error]: ${networkError}`);
    // }
  });
  
  const link: ApolloLink = ApolloLink.from([errorLink, httpLink]);
  
  const cache = new InMemoryCache();
  
  const client: any = new ApolloClient({
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