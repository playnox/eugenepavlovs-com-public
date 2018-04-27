import { Subscription } from 'rxjs/Rx';
import { UiService } from '../../../../services/ui.service';
import { Component, OnInit, OnDestroy } from '@angular/core';



@Component({
    selector: 'app-home-experience',
    templateUrl: './experience.component.html'
})



export class ExperienceComponent implements OnInit, OnDestroy {
    


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
                if(ui.components.hasOwnProperty('experience')) {
                    this.component = ui.components.experience;
                    this.component.list = this.component.list.filter(
                        row => row.active == true
                    );
                }
            })
        );
    }

    

    ngOnDestroy() {
        this._subs.forEach((sub: any) => sub.unsubscribe());
    }
}
