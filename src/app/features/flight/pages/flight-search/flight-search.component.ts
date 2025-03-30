import { Component } from '@angular/core';
import { FilterFlightComponent } from '../../components/filter-flight/filter-flight.component';
import { ListFlightComponent } from '../../components/list-flight/list-flight.component';
import { PaginatorFlightComponent } from '../../components/paginator-flight/paginator-flight.component';
import { SearchFlightComponent } from '../../components/search-flight/search-flight.component';
import { CarouselFlightComponent } from '../../../../shared/components/carousel/carousel-flight/carousel-flight.component';

@Component({
  selector: 'app-flight-search',
  imports: [FilterFlightComponent,
    ListFlightComponent,
    PaginatorFlightComponent,
    SearchFlightComponent,
    CarouselFlightComponent
  ],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {

}
