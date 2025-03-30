import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHotelComponent } from './carousel-hotel.component';

describe('CarouselHotelComponent', () => {
  let component: CarouselHotelComponent;
  let fixture: ComponentFixture<CarouselHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselHotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
