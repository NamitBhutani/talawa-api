import { gql } from "graphql-tag";

// Place fields alphabetically to ensure easier lookup and navigation.
export const interfaces = gql`
  interface UserErrorInterface {
    message: String!
    code: String!
    param: String!
  }
`;
