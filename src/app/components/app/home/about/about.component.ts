import { Subscription } from 'rxjs/Rx';
import { UiService } from '../../../../services/ui.service';
import { Component, OnInit, OnDestroy } from '@angular/core';



@Component({
    selector: 'app-home-about',
    templateUrl: './about.component.html'
})



export class AboutComponent implements OnInit, OnDestroy {
    


    private _subs: Array<Subscription>;
    public component: any;
    
    

    constructor(
        private _uiService: UiService
    ) {
        this._subs = [];
    }



    ngOnInit() {
        this._subs.push(
            this._uiService.ui.subscribe((ui: any) => {
                if(ui.components.hasOwnProperty('about')) {
                    this.component = ui.components.about;
                }
            })
        );
    }

    

    ngOnDestroy() {
        this._subs.forEach((sub: any) => sub.unsubscribe());
    }
}
