import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePanelComponent } from './title-panel/title-panel.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { AudioWidgetComponent } from './audio-widget/audio-widget.component';
import { TextPanelComponent } from './text-panel/text-panel.component';
import { PlayButtonComponent } from './play-button/play-button.component';

@NgModule({
  declarations: [TitlePanelComponent, MainBannerComponent, AudioWidgetComponent, TextPanelComponent, PlayButtonComponent],
  imports: [
    CommonModule,
  ],
  exports: [TitlePanelComponent, MainBannerComponent, AudioWidgetComponent, TextPanelComponent, PlayButtonComponent]
})
export class GeneralComponentsModule { }
