import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePanelComponent } from './title-panel/title-panel.component';

@NgModule({
  declarations: [TitlePanelComponent],
  imports: [
    CommonModule
  ],
  exports: [TitlePanelComponent]
})
export class GeneralComponentsModule { }
