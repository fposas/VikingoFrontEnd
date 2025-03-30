import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { ActivitiesSearchComponent } from './features/activities/pages/activities-search/activities-search.component';
import { FlightSearchComponent } from './features/flight/pages/flight-search/flight-search.component';
import { HotelSearchComponent } from './features/hotel/pages/hotel-search/hotel-search.component';
import { TourSearchComponent } from './features/tour/pages/tour-search/tour-search.component';
import { MarketingComponent } from './features/marketing/pages/marketing/marketing.component';
import { ChatgptComponent } from './shared/components/chatgpt/chatgpt.component';

export const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"chatgpt",
    component: ChatgptComponent
  },
  {
    path:"marketing",
    component: MarketingComponent
  },
  {
    path:"flight",
    component: FlightSearchComponent
  },
  {
    path:"hotel",
    component: HotelSearchComponent
  },
  {
    path:"tour",
    component: TourSearchComponent
  },
  {
    path:"activities",
    component:ActivitiesSearchComponent
  }
];
