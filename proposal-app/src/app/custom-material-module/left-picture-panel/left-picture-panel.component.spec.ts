import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPicturePanelComponent } from './left-picture-panel.component';

describe('LeftPicturePanelComponent', () => {
  let component: LeftPicturePanelComponent;
  let fixture: ComponentFixture<LeftPicturePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPicturePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPicturePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
