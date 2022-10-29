import { gql } from "@apollo/client";

export const GET_BUSINESSES  = gql`
  query getBusinesses{
      getBusinesses {
        firstName  
        email
        lastName
        businessService {
          descriptionOfService
          nameOfService
          priceOfService
          timeOfService
        }
      }
    }
    `