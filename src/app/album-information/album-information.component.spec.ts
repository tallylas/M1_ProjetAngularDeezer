import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumInformationComponent } from './album-information.component';

describe('AlbumInformationComponent', () => {
  let component: AlbumInformationComponent;
  let fixture: ComponentFixture<AlbumInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
