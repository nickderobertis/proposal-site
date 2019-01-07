import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-panel',
  templateUrl: './text-panel.component.html',
  styleUrls: ['./text-panel.component.css']
})
export class TextPanelComponent implements OnInit {
  @Input() text: string = '';

  constructor() { }

  ngOnInit() {
  }

}
