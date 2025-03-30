import { Component } from '@angular/core';
import { FilterActivitiesComponent } from '../../components/filter-activities/filter-activities.component';
import { PaginatorActivitiesComponent } from '../../components/paginator-activities/paginator-activities.component';
import { ListActivitiesComponent } from '../../components/list-activities/list-activities.component';
import { SearchActivitiesComponent } from '../../components/search-activities/search-activities.component';
import { CarouselActivitiesComponent } from '../../../../shared/components/carousel/carousel-activities/carousel-activities.component';

@Component({
  selector: 'app-activities-search',
  imports: [FilterActivitiesComponent,
    PaginatorActivitiesComponent,
    ListActivitiesComponent,
    SearchActivitiesComponent,
    CarouselActivitiesComponent
  ],
  templateUrl: './activities-search.component.html',
  styleUrl: './activities-search.component.css'
})
export class ActivitiesSearchComponent {

}
