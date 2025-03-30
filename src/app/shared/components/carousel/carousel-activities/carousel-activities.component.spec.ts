import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselActivitiesComponent } from './carousel-activities.component';

describe('CarouselActivitiesComponent', () => {
  let component: CarouselActivitiesComponent;
  let fixture: ComponentFixture<CarouselActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselActivitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
