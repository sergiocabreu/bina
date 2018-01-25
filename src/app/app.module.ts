import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomPrimengModule } from './custom-primeng/custom-primeng.module';
import { ContatosComponent } from './contatos/contatos.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule, CustomPrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
