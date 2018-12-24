import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureWithCaptionComponent } from './picture-with-caption.component';

describe('PictureWithCaptionComponent', () => {
  let component: PictureWithCaptionComponent;
  let fixture: ComponentFixture<PictureWithCaptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureWithCaptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureWithCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
