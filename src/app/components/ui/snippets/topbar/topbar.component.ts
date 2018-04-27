import {
    Input,
	Component
} from '@angular/core';



@Component({
	selector: 'ui-topbar',
	templateUrl: './topbar.component.html'
})



export class TopbarComponent {



    @Input('sticky') sticky: boolean | string;
    @Input('styles') styles: Array<any> | string;



    constructor() {
        
    }
}