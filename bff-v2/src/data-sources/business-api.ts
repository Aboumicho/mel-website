import { request } from "graphql-request";
import CustomRestDataSource from "./custom-rest-data-source";

export default class BusinessApi extends CustomRestDataSource {
    contextApiEndpoint : string;
    baseUrl: string;
    BUSINESSES_ENDPOINT: string = "businesses/firstname/lastname/email/";

    constructor(){
        super();
        this.baseURL = "http://localhost:8080/";
    }

    //Override
    protected async didReceiveResponse(response, _request) {
        console.log("RESPONSE ", response)
        return response;
    }

    async _getResponse(endpoint, query, headers){
        return this.get(`businesses/firstname/lastname/email/`);
    }

    getBusinesses(){
        let response =this._getResponse(this.BUSINESSES_ENDPOINT, null , null )
        return response;
    }

    async getBusinessesListResponse(endpoint: string, query: string, variables){
        const response = await request(endpoint, query, variables);
        return response;
    }


}