import {
    Injectable
} from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions,
    Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiHeaderService } from './header.service';



@Injectable()
export class ApiService {



    private _methods: Array<any>;
    private _config: any;

    

    constructor(
        private _http: Http,
        private _apiHeaderService: ApiHeaderService
    ) {
        this._methods = ['get', 'post', 'put', 'delete'];
        this._config = {
            api: {
                url: 'assets/db'
            }
        };
    }



    private _getJson(res: Response) {
        return res.json();
    }

   

    private _makeUrl(path) {
        return this._config.api.url + '/' + path;
    }
    


    private _handleError(err: Response | any) {
        switch (err.status) {
            case 401:
                console.log('Unauthorirized!');
            default:
                console.log('Api call returned an error: ', err);
                break;
        }
        return Observable.throw(err.json());
    }


    
    public get(path) {
        return this.call(path, null, 'get');
    }



    public post(path, params) {
        return this.call(path, params, 'post');
    }



    public put(path, params) {
        return this.call(path, params, 'put');
    }



    public call(path: string, params? :any, method?: string): Observable<any> {


        
        /**
         * setting default values
         */
        method = method || 'get';
        params = params || {};


        
        /**
         * validating request method
         */
        if (this._methods.indexOf(method) === -1) {
            throw 'Unsupported http method: (' + method + ') passed to ApiService call() function';
        }



        /**
         * making url
         */
        let url = this._makeUrl(path);



        /**
         * if method GET or DELETE
         */
        if (method === 'get' || method === 'delete') {



            /**
             * in some cases 
             * GET | DELETE methods also accepts query params
             */
            if(params.length > 0) {
                let paylaod:URLSearchParams = new URLSearchParams();
                for (let key in params) {
                    paylaod.set(key, params[key]);
                }
                url += '?' + paylaod;
            }



            /**
             * making clean GET | DELETE http call
             */
            return this._http[method](url, {
                headers: this._apiHeaderService.headers
            })
            .catch(err => this._handleError(err))
            .map(this._getJson);
        }
        else {


            
            /**
             * making clean POST | PUT http call
             */
            return this._http[method](url, params, {
                headers: this._apiHeaderService.headers
            })
            .catch(err => this._handleError(err))
            .map(this._getJson);
        }
    }
}
