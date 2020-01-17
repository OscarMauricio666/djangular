import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DepositosComponent } from '../depositos/depositos.component';
import { ArticulosComponent } from '../articulos/articulos.component';

const MAINROUTES: Routes = [
    { path: 'main',
     children: [
        { path: 'depositos', component: DepositosComponent },
        { path: 'articulos', component: ArticulosComponent },
        ]
    }
];

export const MAIN_ROUTES = RouterModule.forChild( MAINROUTES );
