import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BetComponent } from './bet/bet.component';
import { DriverSelectorComponent } from './bet/driver-selector/driver-selector.component';
import { DataListModule } from 'primeng/datalist';
import { PlayerService } from './service/player-service';
import { ButtonModule } from 'primeng/button';
import { BetService } from './service/bet-service';
import { DialogModule } from 'primeng/dialog';
import { BetDialogComponent } from './bet-dialog/bet-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RiderService } from './service/rider-service';
import { PanelModule } from 'primeng/panel';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bet', component: BetDialogComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BetComponent,
    DriverSelectorComponent,
    BetDialogComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    DataListModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    PanelModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PlayerService, BetService, RiderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
