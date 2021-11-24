import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponentComponent } from './success-component/success-component.component';
import { WarningComponentComponent } from './warning-component/warning-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponentComponent,
    WarningComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
