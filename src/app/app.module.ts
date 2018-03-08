import { AppRoutingModule } from './app-routing.module';
import { UserSessionService } from './service/user-session.service';
import { TotogpHttpClient } from './shared/totogp-http-client';
import { AuthGuard } from './shared/auth-guard';
import { TotogpErrorHandler } from './shared/totogp-error-handler';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
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
import { BetService } from './service/bet.service';
import { HomeService } from './service/home.service';
import { LoginService } from './service/login.service';
import { Http } from '@angular/http';

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
    AppRoutingModule,
    GrowlModule,
    HttpClientModule
  ],
  providers: [
    HomeService,
    BetService,
    MessageService,
    HttpClient,
    BetService,
    {
      provide: ErrorHandler,
      useClass: TotogpErrorHandler
    }, AuthGuard, LoginService, TotogpHttpClient, UserSessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
