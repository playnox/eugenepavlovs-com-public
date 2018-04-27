import { Subscription } from 'rxjs/Rx';
import { UiService } from '../../../../services/ui.service';
import { Component, OnInit, OnDestroy } from '@angular/core';



@Component({
    selector: 'app-home-skills',
    templateUrl: './skills.component.html'
})



export class SkillsComponent implements OnInit, OnDestroy {
    


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
                if(ui.components.hasOwnProperty('skills')) {
                    this.component = ui.components.skills;
                }
            })
        );
    }

    

    ngOnDestroy() {
        this._subs.forEach((sub: any) => sub.unsubscribe());
    }
}
