import { Injector, Injectable } from '@angular/core';
import { LOCATION_INITIALIZED } from '@angular/common';
import { UiService } from './ui.service';



/**
 * Init service
 * runs ui service prior application load
 */
@Injectable()
export class InitService {



	private promise: Promise<any>;



	constructor(
		private _injector: Injector,
		private _uiService: UiService
	){


		/**
		 * LOCATION_INITIALIZED
		 * this fixes IE 10/11 issue
		 */
		this.promise = this._injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
	}



	/**
	 * before application loads
	 */
	public init(): boolean | Promise<any> {
		return this.promise.then(() => {
			return this._uiService.init();
		});
	}
}
