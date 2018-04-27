import {
    OnInit,
    Directive,
    ElementRef,
    Renderer,
    Input,
} from '@angular/core';



@Directive({
    selector: '[bg]'
})


export class BgDirective implements OnInit {


    
    @Input('bg') bg: any;


    
    constructor(
        public element: ElementRef,
        public renderer: Renderer
    ) {}


    
    ngOnInit() {
        this.renderer.setElementStyle(this.element.nativeElement, 'background-image', 'url(' + this.bg + ')');
    }
}