import {
    RouterModule,
    Routes
} from '@angular/router';
import { HomeComponent } from './components/app/home/home.component';
import { NotFoundComponent } from './components/app/not-found/not-found.component';



const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
    	path: '**',
        component: NotFoundComponent
    }
];



export const AppRoutes = RouterModule.forRoot(appRoutes);
