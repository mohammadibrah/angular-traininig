import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CourcesComponent } from './cources.component';
import { TestComponent } from './test/test.component';
import { courcesServis } from './cources.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CourcesComponent, TestComponent],
  providers: [
    courcesServis
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
