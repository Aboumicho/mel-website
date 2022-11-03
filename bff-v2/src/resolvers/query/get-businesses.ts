import BusinessApi from "../../data-sources/business-api";

export default async ( ) =>{
    const getBusinessApi = new BusinessApi();
    const response = await getBusinessApi.getBusinesses();
    return [response];
}