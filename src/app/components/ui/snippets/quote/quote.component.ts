import { Component, Input } from '@angular/core';



@Component({
    selector: 'ui-quote',
    templateUrl: 'quote.component.html'
})



export class QuoteComponent {



    @Input('quote') quote: string;
    @Input('author') author: string;



    constructor() {

    }
}