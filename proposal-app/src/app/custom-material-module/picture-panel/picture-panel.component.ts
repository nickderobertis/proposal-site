import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-panel',
  templateUrl: './picture-panel.component.html',
  styleUrls: ['./picture-panel.component.css']
})
export class PicturePanelComponent implements OnInit {
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
    if (this.shouldDisplayInputArea) {
      // four sevenths for text, three sevenths for picture
      return 7;
    }
    else {
      // Centered, no text area, make picture bigger
      return 5;
    }
  }

  get numPictureCols(): number {
    if (this.shouldDisplayInputArea) {
      // four sevenths for text, three sevenths for picture
      return 3;
    }
    else {
      // Centered, no text area, make picture bigger
      return 3;
    }
  }

  get numTextCols(): number {
    return this.numCols - this.numPictureCols
  }

}
