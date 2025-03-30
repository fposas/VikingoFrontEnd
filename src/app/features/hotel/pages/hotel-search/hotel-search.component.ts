import { Component } from '@angular/core';
import { FilterHotelComponent } from '../../components/filter-hotel/filter-hotel.component';
import { ListHotelComponent } from '../../components/list-hotel/list-hotel.component';
import { PaginatorHotelComponent } from '../../components/paginator-hotel/paginator-hotel.component';
import { SearchHotelComponent } from '../../components/search-hotel/search-hotel.component';
import { CarouselHotelComponent } from '../../../../shared/components/carousel/carousel-hotel/carousel-hotel.component';

@Component({
  selector: 'app-hotel-search',
  imports: [FilterHotelComponent,
    ListHotelComponent,
    PaginatorHotelComponent,
    SearchHotelComponent,
  CarouselHotelComponent],
  templateUrl: './hotel-search.component.html',
  styleUrl: './hotel-search.component.css'
})
export class HotelSearchComponent {

}
