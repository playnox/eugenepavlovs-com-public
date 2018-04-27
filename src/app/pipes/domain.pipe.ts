import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'domain'})
export class DomainPipe implements PipeTransform {
    transform(url: any) {
    	url = url.replace(/(https?:\/\/)?(www.)?/i, '');
    	if (url.indexOf('/') !== -1) {
    	    return url.split('/')[0];
    	}
    	return url;
   	}
}
