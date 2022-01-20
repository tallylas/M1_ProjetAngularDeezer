import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMysteryComponent } from './track-mystery.component';

describe('TrackMysteryComponent', () => {
  let component: TrackMysteryComponent;
  let fixture: ComponentFixture<TrackMysteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackMysteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMysteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
