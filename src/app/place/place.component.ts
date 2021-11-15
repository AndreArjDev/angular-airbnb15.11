import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../place';
import { PlaceService } from '../place.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
})
export class PlaceComponent implements OnInit {
  place: Place | undefined;
  placeList = null;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService
  ) {}

  ngOnInit() {
    
    const routeParams = this.route.snapshot.paramMap;
    const numeroPlaceFromRoute = String(routeParams.get('place'));

    this.placeService
      .getPlace(numeroPlaceFromRoute)
      .subscribe((res:Place[]) => (this.placeList = new MatTableDataSource<Place>(res)));
  }
}
