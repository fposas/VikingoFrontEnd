import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideosComponent } from '../../../../shared/components/videos/videos.component';
// import { CarouselActivitiesComponent } from '../../../../shared/components/carousel/carousel-activities/carousel-activities.component';

@Component({
  imports: [VideosComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
