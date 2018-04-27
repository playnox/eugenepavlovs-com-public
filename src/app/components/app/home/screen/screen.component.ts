import { Subscription } from 'rxjs/Rx';
import { UiService } from '../../../../services/ui.service';
import { Component, OnInit, OnDestroy } from '@angular/core';



@Component({
    selector: 'app-home-screen',
    templateUrl: './screen.component.html'
})



export class ScreenComponent implements OnInit, OnDestroy {
    


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
                if(ui.components.hasOwnProperty('screen')) {
                    this.component = ui.components.screen;
                }
            })
        );
    }

    

    ngOnDestroy() {
        this._subs.forEach((sub: any) => sub.unsubscribe());
    }
}
