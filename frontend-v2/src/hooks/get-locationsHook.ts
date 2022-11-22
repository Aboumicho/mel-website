import React from "react";
import { useQuery } from "@apollo/client";
import { GetLocationsQuery } from "../queries/get-locations";

export const GetLocationsData = () => {
    const { loading, error, data } = useQuery(GetLocationsQuery);
    return{loading, error, data}
    
}