import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const APPROUTES: Routes = [
    { path: 'main', component: MainComponent }
];
export const APP_ROUTES = RouterModule.forRoot( APPROUTES, { useHash: true } );
