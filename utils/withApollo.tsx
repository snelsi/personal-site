import withApollo from "next-with-apollo";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: "https://snelsi.herokuapp.com/v1/graphql",
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      const { apollo } = props;
      return (
        <ApolloProvider client={apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  },
);
