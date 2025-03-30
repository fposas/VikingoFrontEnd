import { Component } from '@angular/core';
import { FilterTourComponent } from '../../components/filter-tour/filter-tour.component';
import { PaginatorTourComponent } from '../../components/paginator-tour/paginator-tour.component';
import { ListTourComponent } from '../../components/list-tour/list-tour.component';
import { SearchTourComponent } from '../../components/search-tour/search-tour.component';
import { CarouselTourComponent } from '../../../../shared/components/carousel/carousel-tour/carousel-tour.component';

@Component({
  selector: 'app-tour-search',
  imports: [FilterTourComponent,
    PaginatorTourComponent,
    ListTourComponent,
    SearchTourComponent,
  CarouselTourComponent],
  templateUrl: './tour-search.component.html',
  styleUrl: './tour-search.component.css'
})
export class TourSearchComponent {

}
