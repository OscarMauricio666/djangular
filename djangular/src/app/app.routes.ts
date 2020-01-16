import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DepositosComponent } from './depositos/depositos.component';
import { ArticulosComponent } from './articulos/articulos.component';

const APPROUTES: Routes = [
    { path: '', component: MainComponent,
        children: [
            {
              path: 'depositos',
              component: DepositosComponent
            },
            {
              path: 'articulos',
              component: ArticulosComponent
            }
        ]
     },
    { path: 'main', component: MainComponent}
];
export const APP_ROUTES = RouterModule.forRoot( APPROUTES, { useHash: true } );
