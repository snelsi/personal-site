import * as React from "react";

import { useQuery, gql } from "@apollo/client";

import { Card, Gallery } from "components";

interface Repositorie {
  description: string;
  id: string;
  name: string;
  openGraphImageUrl: string;
  stargazers: {
    totalCount: number;
  };
  url: string;
}
interface GET_MY_REPOSITORIES_DATA {
  user: {
    name: string;
    login: string;
    repositories: {
      totalCount: number;
      nodes: Repositorie[];
    };
  };
}
const GET_MY_REPOSITORIES = gql`
  query GetRepositorys {
    user(login: "snelsi") {
      name
      login
      repositories(first: 6, orderBy: { field: STARGAZERS, direction: DESC }, privacy: PUBLIC) {
        totalCount
        nodes {
          description
          id
          name
          openGraphImageUrl
          stargazers {
            totalCount
          }
          url
        }
      }
    }
  }
`;

interface GithubProjectsGalleryProps {}

export const GithubProjectsGallery: React.FC<GithubProjectsGalleryProps> = () => {
  const { data } = useQuery<GET_MY_REPOSITORIES_DATA>(GET_MY_REPOSITORIES);

  return (
    <Gallery anchor="github" title="Покопаться в Коде" url="https://github.com/snelsi">
      {data &&
        data.user.repositories.nodes.map(
          ({ name, description, openGraphImageUrl, url, stargazers }) => (
            <Card
              inner={false}
              tag="GitHub"
              img={openGraphImageUrl}
              title={name}
              description={description}
              url={url}
              stars={stargazers.totalCount}
            />
          ),
        )}
    </Gallery>
  );
};
