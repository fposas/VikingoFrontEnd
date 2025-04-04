import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHotelComponent } from './filter-hotel.component';

describe('FilterHotelComponent', () => {
  let component: FilterHotelComponent;
  let fixture: ComponentFixture<FilterHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterHotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
