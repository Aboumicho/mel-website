import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../queries/getLocations";

export const GET_LOCATION_HOOK = () => {
    const { loading, error, data } = useQuery(GET_LOCATIONS);
    return{loading, error, data}
    
}