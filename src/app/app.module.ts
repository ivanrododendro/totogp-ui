import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/components/common/messageservice';
import { DataListModule } from 'primeng/datalist';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { GrowlModule } from 'primeng/growl';
import { PanelModule } from 'primeng/panel';

import { AppComponent } from './app.component';
import { BetDialogComponent } from './home/bet-dialog/bet-dialog.component';
import { DriverSelectorComponent } from './home/bet-dialog/driver-selector/driver-selector.component';
import { HomeComponent } from './home/home.component';
import { RankingComponent } from './home/ranking/ranking.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BetService } from './service/bet-service';
import { PlayerService } from './service/player-service';
import { RiderService } from './service/rider-service';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: 'bet', component: BetDialogComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DriverSelectorComponent,
    BetDialogComponent,
    LoginComponent,
    PageNotFoundComponent,
    RankingComponent
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
    ),
    GrowlModule
  ],
  providers: [PlayerService, BetService, RiderService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
