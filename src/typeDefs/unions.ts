import { gql } from "graphql-tag";

// Place fields alphabetically to ensure easier lookup and navigation.
export const unions = gql`
  union CreateMemberResult =
      Organization
    | OrganizationNotFoundError
    | MemberAlreadyinOrganizationError
    | UserNotFoundError
`;
