import { HTTPCache } from "apollo-datasource-rest";
import { request } from "graphql-request";
import CustomRestDataSource from "./custom-rest-data-source";

export default class BusinessApi extends CustomRestDataSource {
    contextApiEndpoint : string;
    baseUrl: string;
    BUSINESSES_ENDPOINT: string = "businesses/firstname/lastname/email/";

    constructor(){
        super();
        this.baseURL = "http://localhost:8080/";
        this.httpCache = new HTTPCache()
    }

    //Override
    protected async didReceiveResponse(response, _request) {
        return response;
    }

    _getResponse(endpoint, query, headers){
        return this.get(`businesses/firstname/lastname/email/`);
    }

     getBusinesses(){
        let response = this._getResponse(this.BUSINESSES_ENDPOINT, null , null )
        console.log("GET BUSINESSES", response)
        return response;
    }

    async getBusinessesListResponse(endpoint: string, query: string, variables){
        console.log("endpoint ", endpoint);

        const response = await request(endpoint, query, variables);
        return response;
    }


}