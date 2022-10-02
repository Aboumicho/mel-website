import {RESTDataSource, RequestOptions} from "apollo-datasource-rest";

export default abstract class CustomRestDataSource extends RESTDataSource{

    protected constructor(){
        super();
    }

    protected willSendRequest(request: RequestOptions): void | Promise<void> {
        console.log("REQUEST ", request)
    }

    protected async didReceiveResponse<TResult = any>(
        response: Response,
        _request: Request
    ): Promise<TResult>{
        console.log("RESPONSE ", response)
        if(response.status >= 200 && response.status < 300){
            const contentType = response.headers.get("Content-Type");
            return (this.parseBody(response) as any) as Promise<TResult>;
        }
        else{
            throw await this.errorFromResponse(response);
        }
    }

}