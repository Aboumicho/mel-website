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
    protected async didReceiveResponse<TResult = any>(response, _request) {
        if(response.status >= 200 && response.status < 300){
            const contentType = response.headers.get("content-type");
            console.log("RESPONSE didReceiveResponse > " );
            return (response.json() as any) as Promise<TResult>;
        }
        else{
            throw await this.errorFromResponse(response);
        }
        return response;
    }

    _getResponse(endpoint, query, headers){
        return this.get(`businessOwner/firstname/lastname/email/`);
    }

     getBusinesses(){
        let response = this._getResponse(this.BUSINESSES_ENDPOINT, null , null )
        
        return response;
    }

    async getBusinessesListResponse(endpoint: string, query: string, variables){
        const response = await request(endpoint, query, variables);
        return response;
    }


}