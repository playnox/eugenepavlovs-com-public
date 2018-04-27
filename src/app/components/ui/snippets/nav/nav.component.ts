import {
    Input,
	Component
} from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';



@Component({
	selector: 'ui-nav',
	templateUrl: './nav.component.html'
})



export class NavComponent {



    @Input('sticky') sticky: boolean | string;
    @Input('styles') styles: Array<any> | string;



    constructor() {
        PageScrollConfig.defaultScrollOffset = 62;
		PageScrollConfig.defaultDuration = 500;
    }
}