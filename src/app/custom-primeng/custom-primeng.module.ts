import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GrowlModule } from 'primeng/growl';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, 
    FormsModule,
    ButtonModule,
    CardModule,
    GrowlModule
  ], 
  exports: [
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    GrowlModule
  ], 
  declarations: []
})
export class CustomPrimengModule { }
