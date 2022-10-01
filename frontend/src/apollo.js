import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const ApolloConfig = (props) => {

    const client = new ApolloClient({
        uri: 'http://localhost:4000/',
        cache: new InMemoryCache(),
      });
    
    

    return (
        <ApolloProvider client={client}>
            {props.children}
      </ApolloProvider>
    );
}

export default ApolloConfig