import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SnippetsModule } from './components/ui/snippets';
import { PipesModule } from './pipes/pipes.module';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AppRoutes } from './app.routes';
import {
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ScreenComponent,
    AboutComponent,
    ProjectComponent,
    ExperienceComponent,
    SkillsComponent
} from './components';
import {
    InitService,
    ApiHeaderService,
    ApiService,
    UiService,
} from './services';



/**
 * 
 * @param _initService 
 * init function for app initializer
 */
export function init(_initService: InitService) {
    return () => _initService.init();
}



@NgModule({
	declarations: [
    	AppComponent,
    	HomeComponent,
        NotFoundComponent,
        ScreenComponent,
        AboutComponent,
        ProjectComponent,
        ExperienceComponent,
        SkillsComponent
  	],
	imports: [
		BrowserModule,
        HttpModule,
        SnippetsModule,
        PipesModule,
        Ng2PageScrollModule,
        // ScrollToModule.forRoot(),
        AppRoutes
	],
	providers: [
		InitService,
        ApiHeaderService,
        ApiService,
        UiService,
        {
            provide:    APP_INITIALIZER,
            useFactory: init,
            deps:       [InitService],
            multi:      true
        }
	],
	bootstrap: [AppComponent]
})



export class AppModule {}
