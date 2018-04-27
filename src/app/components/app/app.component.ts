import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';



@Component({
	selector: 'app',
	templateUrl: './app.component.html'
})


export class AppComponent {

	constructor() {
        PageScrollConfig.defaultScrollOffset = 62;
		PageScrollConfig.defaultDuration = 500;
    }
}
