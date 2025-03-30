import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTourComponent } from './carousel-tour.component';

describe('CarouselTourComponent', () => {
  let component: CarouselTourComponent;
  let fixture: ComponentFixture<CarouselTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
