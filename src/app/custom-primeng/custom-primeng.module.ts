import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GrowlModule } from 'primeng/growl';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, 
    FormsModule,
    ButtonModule,
    CardModule,
    GrowlModule,
    InputTextModule
  ], 
  exports: [
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    GrowlModule,
    InputTextModule
  ], 
  declarations: []
})
export class CustomPrimengModule { }
