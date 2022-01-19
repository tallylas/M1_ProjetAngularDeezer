import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsResultsComponent } from './artists-results.component';

describe('ArtistsResultsComponent', () => {
  let component: ArtistsResultsComponent;
  let fixture: ComponentFixture<ArtistsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
