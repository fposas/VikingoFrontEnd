import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTourComponent } from './filter-tour.component';

describe('FilterTourComponent', () => {
  let component: FilterTourComponent;
  let fixture: ComponentFixture<FilterTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
