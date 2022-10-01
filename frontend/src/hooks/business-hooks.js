import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BUSINESSES } from "../queries/get-businesses";

export const GET_BUSINESSES_HOOK = () => {
    const { loading, error, data } = useQuery(GET_BUSINESSES);
    return{loading, error, data}
    
}