import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriosRemakeComponent } from './crios-remake/crios-remake.component';
import { CriosRemakeBodyComponent } from './crios-remake-body/crios-remake-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CriosRemakeComponent,
    CriosRemakeBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
