import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { BetComponent } from './bet/bet.component';
import { DriverSelectorComponent } from './bet/driver-selector/driver-selector.component';

@NgModule({
  declarations: [AppComponent, RootComponent, HomeComponent, BetComponent, DriverSelectorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
