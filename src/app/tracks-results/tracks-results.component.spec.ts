import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksResultsComponent } from './tracks-results.component';

describe('TracksResultsComponent', () => {
  let component: TracksResultsComponent;
  let fixture: ComponentFixture<TracksResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracksResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
