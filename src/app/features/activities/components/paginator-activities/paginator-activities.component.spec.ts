import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorActivitiesComponent } from './paginator-activities.component';

describe('PaginatorActivitiesComponent', () => {
  let component: PaginatorActivitiesComponent;
  let fixture: ComponentFixture<PaginatorActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatorActivitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
