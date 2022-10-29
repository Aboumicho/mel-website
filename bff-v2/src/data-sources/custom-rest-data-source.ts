import {RESTDataSource, RequestOptions} from "apollo-datasource-rest";

export default abstract class CustomRestDataSource extends RESTDataSource{

    protected constructor(){
        super();
    }

    protected willSendRequest(request: RequestOptions): void | Promise<void> {
        request.headers.set('json', 'true');
        request.headers.set('Access-Control-Allow-Origin', 'true');
    }

    protected async didReceiveResponse<TResult = any>(
        response: Response,
        _request: Request
    ): Promise<TResult>{
        if(response.status >= 200 && response.status < 300){
            const contentType = response.headers.get("content-type");
            return (this.parseBody(response) as any) as Promise<TResult>;
        }
        else{
            throw await this.errorFromResponse(response);
        }
    }

}