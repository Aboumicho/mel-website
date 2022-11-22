import React from "react";
import { useQuery } from "@apollo/client";
import { getBusinessesQuery } from "../queries/get-businesses";

export const GetBusinessesData = () => {
    const { loading, error, data } = useQuery(getBusinessesQuery);
    return{loading, error, data}
    
}