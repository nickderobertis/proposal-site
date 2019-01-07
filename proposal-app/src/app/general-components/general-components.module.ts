import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePanelComponent } from './title-panel/title-panel.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { AudioWidgetComponent } from './audio-widget/audio-widget.component';
import { TextPanelComponent } from './text-panel/text-panel.component';

@NgModule({
  declarations: [TitlePanelComponent, MainBannerComponent, AudioWidgetComponent, TextPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [TitlePanelComponent, MainBannerComponent, AudioWidgetComponent, TextPanelComponent]
})
export class GeneralComponentsModule { }
