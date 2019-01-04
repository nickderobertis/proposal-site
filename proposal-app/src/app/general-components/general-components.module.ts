import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePanelComponent } from './title-panel/title-panel.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { AudioWidgetComponent } from './audio-widget/audio-widget.component';

@NgModule({
  declarations: [TitlePanelComponent, MainBannerComponent, AudioWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [TitlePanelComponent, MainBannerComponent, AudioWidgetComponent]
})
export class GeneralComponentsModule { }
