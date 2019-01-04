import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-with-caption',
  templateUrl: './picture-with-caption.component.html',
  styleUrls: ['./picture-with-caption.component.css']
})
export class PictureWithCaptionComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() imageAlt: string = 'An image';
  @Input() caption: string = '';

  constructor() { }

  ngOnInit() {
  }

  get shouldDisplayCaption() {
    return this.caption != '';
  }

  get cssImageUrl() {
    return `url(${this.imageUrl})`
  }

}
