import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audio-widget',
  templateUrl: './audio-widget.component.html',
  styleUrls: ['./audio-widget.component.css']
})
export class AudioWidgetComponent implements OnInit {
  @Input() source: string = '';

  constructor() { }

  ngOnInit() {
  }

  get sourceType() {
    if (this.source == '') {
      return '';
    }
    // Extract extension from file type
    let extensionIndex: number = this.source.lastIndexOf(".") + 1;
    let extension = this.source.slice(extensionIndex, this.source.length);
    return `audio/${extension}`;
  }


}
