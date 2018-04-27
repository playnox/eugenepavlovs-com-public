import {
    Directive,
    Input,
    Renderer,
    ElementRef,
    OnInit
} from '@angular/core';
import { Observable } from 'rxjs';



@Directive({
    selector: '[sticky]'
})



export class StickyDirective implements OnInit {


    private offsetTop: number;
    private lastScroll: number;
    private isSticky: boolean;
    @Input('stickyClass') stickyClass: string;



    constructor(
        private _elementRef: ElementRef, 
        private _renderer: Renderer
    ) {
        this.lastScroll = 0;
        this.isSticky = false;
    }



    ngOnInit(): void {
        this.offsetTop = this._elementRef.nativeElement.offsetTop;
        Observable.fromEvent(window, 'scroll').subscribe(() => this._manageScrollEvent());
    }



    private _manageScrollEvent(): void {
        const scroll = window.pageYOffset;
        if (scroll > this.lastScroll && !this.isSticky && scroll >= this.offsetTop) {
            this._setSticky();
        } else if (scroll < this.lastScroll && this.isSticky && scroll <= this.offsetTop) {
            this._unsetSticky();
        }
        this.lastScroll = scroll;
    }


    private _setSticky(): void {
        this.isSticky = true;
        this._setStyle('position', 'fixed');
        this._setStyle('top', '0');
        this._setClass(true);
    }



    private _unsetSticky(): void {
        this.isSticky = false;
        this._setStyle('position', 'static');
        this._setClass(false);
    }



    private _setStyle(key: string, value: string): void {
        this._renderer.setElementStyle(this._elementRef.nativeElement, key, value);
    }



    private _setClass(add: boolean): void {
        this._renderer.setElementClass(this._elementRef.nativeElement, this.stickyClass, add);
    }
}