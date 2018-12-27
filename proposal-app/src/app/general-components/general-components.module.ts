import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePanelComponent } from './title-panel/title-panel.component';
import { MainBannerComponent } from './main-banner/main-banner.component';

@NgModule({
  declarations: [TitlePanelComponent, MainBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [TitlePanelComponent, MainBannerComponent]
})
export class GeneralComponentsModule { }
