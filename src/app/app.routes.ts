import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';

export const routes: Routes = [
    { path: 'login-component', component: LoginComponent },
    { path: 'browse', component: BrowseComponent },
    
    {
        path:'',
        redirectTo:'/login-component',
        pathMatch: 'full'}, 
];
