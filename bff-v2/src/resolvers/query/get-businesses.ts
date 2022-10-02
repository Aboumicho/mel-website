import dataSources from "../../data-sources";
import BusinessApi from "../../data-sources/business-api";

export default async (_, {id}, {dataSources} ) =>{
    return dataSources.BusinessApi.getBusinesses();

    
}