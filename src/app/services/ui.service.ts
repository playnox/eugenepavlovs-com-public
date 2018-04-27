import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, Type, Component } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';



export interface Ui {
    id: string,
    ver: string;
    components: Array<any>[],
    config: Object,
}
const defaultUi: Ui = {
    id: '',
    ver: '',
    components: [],
    config: {}
}



/**
 * Ui service
 * provides user interface settings (ui)
 * throughout the whole application
 */
@Injectable()
export class UiService {



    private _ui: BehaviorSubject<Ui>;
    private _config: any;
    


    constructor(
        private _apiService: ApiService
    ) {
        this._ui = new BehaviorSubject<Ui>(defaultUi);
        this._config = {
            id: 'LocalStorageConflictIdentifier'
        };
    }



    get ui() {
        return this._ui.asObservable().distinctUntilChanged();
    }



    private _get(): Ui {
        return this._ui.value;
    }



    private _set(ui: any): void {
        this._ui.next(Object.assign({}, ui));
        this.save();
        return ui;
    }


    
    public save() {
        localStorage.setItem('ui', JSON.stringify(this._get()));
        console.log('UI Saved!', this._get());
    }
    


    private _isSet(): boolean {
        if (localStorage.getItem('ui')) {
            return !!(JSON.parse(localStorage.getItem('ui')).id == this._config.id);
        }
        return false;
    }



    public renew() {
        return this._apiService.get('ui.json')
        .map(ui => this._set(ui))
        .toPromise();
    }



    init() {
        return this._isSet() ? this._set(JSON.parse(localStorage.getItem('ui'))) : this.renew();
    }
}
