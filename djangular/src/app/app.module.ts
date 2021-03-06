import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { APP_ROUTES } from './app.routes';
import { ArticulosComponent } from './articulos/articulos.component';
import { DepositosComponent } from './depositos/depositos.component';
// Rutas

import {MatCardModule} from '@angular/material/card';
import { MatMenuModule, MatFormFieldModule } from '@angular/material';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ArticulosComponent,
    DepositosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    APP_ROUTES,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
