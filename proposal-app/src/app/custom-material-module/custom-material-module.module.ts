import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule
  ]
})
export class CustomMaterialModuleModule { }
