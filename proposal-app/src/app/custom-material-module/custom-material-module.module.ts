import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { PictureWithCaptionComponent } from './picture-with-caption/picture-with-caption.component';
import { LeftPicturePanelComponent } from './left-picture-panel/left-picture-panel.component';

@NgModule({
  declarations: [PictureWithCaptionComponent, LeftPicturePanelComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    LeftPicturePanelComponent,
    PictureWithCaptionComponent
  ]
})
export class CustomMaterialModuleModule { }
