import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFlightComponent } from './carousel-flight.component';

describe('CarouselFlightComponent', () => {
  let component: CarouselFlightComponent;
  let fixture: ComponentFixture<CarouselFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselFlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
