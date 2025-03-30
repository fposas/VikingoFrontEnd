import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorTourComponent } from './paginator-tour.component';

describe('PaginatorTourComponent', () => {
  let component: PaginatorTourComponent;
  let fixture: ComponentFixture<PaginatorTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatorTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
