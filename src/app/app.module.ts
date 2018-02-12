import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BetComponent } from './bet/bet.component';
import { DriverSelectorComponent } from './bet/driver-selector/driver-selector.component';
import { DataListModule } from 'primeng/datalist';
import { PlayerService } from './service/player-service';
import { ButtonModule } from 'primeng/button';
import { BetService } from './service/bet-service';
import { DialogModule } from 'primeng/dialog';
import { BetDialogComponent } from './home/bet-dialog/bet-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RiderService } from './service/rider-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BetComponent,
    DriverSelectorComponent,
    BetDialogComponent
  ],
  imports: [
    BrowserModule,
    DataListModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule
  ],
  providers: [PlayerService, BetService, RiderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
