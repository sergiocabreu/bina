import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomPrimengModule } from './custom-primeng/custom-primeng.module';
import { ContatosComponent } from './contatos/contatos.component';
import { BinaService } from './servicos/bina.service';


@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule, 
    CustomPrimengModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [BinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
