import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostValuablePlacesComponent } from './most-valuable-places.component';

describe('MostValuablePlacesComponent', () => {
  let component: MostValuablePlacesComponent;
  let fixture: ComponentFixture<MostValuablePlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostValuablePlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostValuablePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
