import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorFlightComponent } from './paginator-flight.component';

describe('PaginatorFlightComponent', () => {
  let component: PaginatorFlightComponent;
  let fixture: ComponentFixture<PaginatorFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatorFlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
