import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2PageScrollModule } from 'ng2-page-scroll';


/**
 * components
 */
import { HeadlineComponent } from './headline';;
import { TopbarComponent } from './topbar';
import { BgDirective } from './bg';
import { QuoteComponent } from './quote';
import { StickyDirective } from './sticky';
import { NavComponent } from './nav';
import { FooterComponent } from './footer';


const declarations = [
    QuoteComponent,
    HeadlineComponent,
    TopbarComponent,
    StickyDirective,
    BgDirective,
    NavComponent,
    FooterComponent
]



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        Ng2PageScrollModule
    ],
    declarations: [
        declarations
    ],
    exports: [
        declarations
    ]
})



export class SnippetsModule {}
