import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(values: any, searchStr: string): any {
        return values.filter(val => val.title.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
    }
}
