import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-panel',
  templateUrl: './title-panel.component.html',
  styleUrls: ['./title-panel.component.css']
})
export class TitlePanelComponent implements OnInit {
  @Input() titleText: string;

  constructor() { }

  ngOnInit() {
  }

}
