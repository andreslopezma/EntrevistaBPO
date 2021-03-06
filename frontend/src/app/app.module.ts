import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonalComponent } from './componentes/personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
