import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PictureWithCaptionComponent } from './picture-with-caption/picture-with-caption.component';
import { LeftPicturePanelComponent } from './left-picture-panel/left-picture-panel.component';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  declarations: [PictureWithCaptionComponent, LeftPicturePanelComponent, MainHeaderComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    LeftPicturePanelComponent,
    PictureWithCaptionComponent,
    MainHeaderComponent
  ]
})
export class CustomMaterialModuleModule { }
