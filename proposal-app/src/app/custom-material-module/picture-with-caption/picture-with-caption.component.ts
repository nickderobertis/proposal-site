import { Component, OnInit, Input } from '@angular/core';
import { isEmptyObject } from '../../global/functions/checkObj';

@Component({
  selector: 'app-picture-with-caption',
  templateUrl: './picture-with-caption.component.html',
  styleUrls: ['./picture-with-caption.component.css']
})
export class PictureWithCaptionComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() imageAlt: string = 'An image';
  @Input() caption: string = '';
  @Input() imgCardStyles: object = {};

  constructor() { }

  ngOnInit() {
  }

  get shouldDisplayCaption(): boolean {
    return this.caption != '';
  }

  get cssImageUrl(): string {
    return `url(${this.imageUrl})`
  }

  get stylesObj(): object {
    var styles: object = {'background-image': this.cssImageUrl};
    if (!isEmptyObject(this.imgCardStyles)) {
      styles = Object.assign(styles, this.imgCardStyles);
    }
    return styles;
  }

}
