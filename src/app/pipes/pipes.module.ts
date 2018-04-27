import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';
import { DomainPipe } from './domain.pipe';
import { SearchPipe } from './search.pipe';




const declarations = [
    CapitalizePipe,
    DomainPipe,
    SearchPipe
];



@NgModule({
    declarations: [
        declarations
    ],
    imports:      [
        CommonModule,
    ],
    exports: [
        declarations
    ]
})


export class PipesModule {}
