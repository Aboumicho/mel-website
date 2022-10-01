import { gql } from "@apollo/client";

export const GET_BUSINESSES  = gql`
      query GetBusinesses {
          name
          businessServices
      }
    `