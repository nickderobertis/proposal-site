import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-picture-panel',
  templateUrl: './left-picture-panel.component.html',
  styleUrls: ['./left-picture-panel.component.css']
})
export class LeftPicturePanelComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() imageAlt: string = 'An image';
  @Input() imageCaption: string = '';
  @Input() backgroundColor: string = 'none';
  @Input() picturePosition: string = 'right';

  constructor() { }

  ngOnInit() {
  }

  get shouldDisplayLeftPicture(): boolean {
    return this.picturePosition === 'left';
  }

  get shouldDisplayInputArea(): boolean {
    return this.picturePosition != 'center';
  }

  get shouldDisplayRightPicture(): boolean {
    return this.picturePosition != 'left';
  }

  get shouldDisplayPadding(): boolean {
    return this.picturePosition == 'center';
  }

  get numCols(): number {
    if (!this.shouldDisplayInputArea) {
      // Centered, no text area, make picture bigger
      return 5;
    }
    else {
      // Two thirds for text area, one third for picture
      return 3;
    }
  }

  get numPictureCols(): number {
    if (!this.shouldDisplayInputArea) {
      // Centered, no text area, make picture bigger
      return 3;
    }
    else {
      // Two thirds for text area, one third for picture
      return 1;
    }
  }

  get numTextCols(): number {
    return this.numCols - this.numPictureCols
  }

}
