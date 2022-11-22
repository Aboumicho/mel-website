import { gql } from "@apollo/client";

export const GetLocationsQuery  = gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `