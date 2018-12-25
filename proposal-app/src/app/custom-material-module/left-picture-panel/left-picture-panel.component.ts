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

  constructor() { }

  ngOnInit() {
  }

}
