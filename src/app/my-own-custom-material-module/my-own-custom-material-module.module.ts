import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, MatCardModule, MatButtonModule, MatGridListModule
  ],
  exports: [
    BrowserAnimationsModule, MatCardModule, MatButtonModule, MatGridListModule
  ], 
  declarations: []
})
export class MyOwnCustomMaterialModuleModule { }
