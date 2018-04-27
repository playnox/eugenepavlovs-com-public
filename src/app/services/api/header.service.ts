import {
    Injectable
} from '@angular/core';
import {
    Headers
} from '@angular/http';



@Injectable()
export class ApiHeaderService {


	
	private _headers: Headers = new Headers();


    
    constructor() {
        this._headers.append('Content-Type', 'application/json');
        this._headers.append('Accept', 'application/json');
    }

    
    
    public set(headers) {
        Object.keys(headers).forEach(header => {
            this._headers.set(header, headers[header]);
        });
    }



    public get headers() {
    	return this._headers;
    }
}
