import BusinessApi from "../../data-sources/business-api";

export default async ( ) =>{
    const getBusinessApi = new BusinessApi();
    const response = await getBusinessApi.getBusinesses();
    console.log("JSON.parse( response.businesses) " , [response.businesses])
    console.log("JSON.parse( response) " , [response])
    return [response];
}