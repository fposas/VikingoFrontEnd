import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorHotelComponent } from './paginator-hotel.component';

describe('PaginatorHotelComponent', () => {
  let component: PaginatorHotelComponent;
  let fixture: ComponentFixture<PaginatorHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatorHotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
