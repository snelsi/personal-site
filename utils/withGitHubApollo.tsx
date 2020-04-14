import withGitHubApollo from "next-with-apollo";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const gitHubClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

export default withGitHubApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: "https://api.github.com/graphql",
      cache: new InMemoryCache().restore(initialState || {}),
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
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
