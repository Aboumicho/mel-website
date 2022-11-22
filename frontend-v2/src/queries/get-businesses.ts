import { gql } from "@apollo/client";

export const getBusinessesQuery  = gql`
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