import {
	Component,
	OnInit,
    Input
} from '@angular/core';


@Component({
    selector: 'ui-headline',
    templateUrl: './headline.component.html'
})


export class HeadlineComponent implements OnInit {

    
    @Input('title') title: any;
    

	public ngOnInit() {
		
	}
}