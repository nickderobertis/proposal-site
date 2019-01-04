import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioWidgetComponent } from './audio-widget.component';

describe('AudioWidgetComponent', () => {
  let component: AudioWidgetComponent;
  let fixture: ComponentFixture<AudioWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
