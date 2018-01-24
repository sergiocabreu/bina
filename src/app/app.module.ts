import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModuleModule } from './my-own-custom-material-module/my-own-custom-material-module.module';
import { ContatosComponent } from './contatos/contatos.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule, MyOwnCustomMaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
