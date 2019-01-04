import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeTextDirective } from './resize-text.directive';

@NgModule({
  declarations: [ResizeTextDirective],
  imports: [
    CommonModule
  ],
  exports: [ResizeTextDirective]
})
export class GlobalDirectivesModule { }
