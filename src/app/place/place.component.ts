import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../place';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
})
export class PlaceComponent implements OnInit {
  place: any;
  places: Array<Place> = [];

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService
  ) {}

  ngOnInit() {
    this.place = {};

    const routeParams = this.route.snapshot.paramMap;
    const numeroPlaceFromRoute = String(routeParams.get('place'));

    this.placeService
      .getPlace(numeroPlaceFromRoute)
      .subscribe((res) => (this.places = res));
  }
}
