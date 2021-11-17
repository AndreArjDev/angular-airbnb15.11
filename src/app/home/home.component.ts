import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../place';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent implements OnInit {
  place: any;
  places: Array<any> = [];

  getPlace(place: string) {
    this.router.navigate(['place', place]);
  }

  constructor(private router: Router, private placeService: PlaceService) {}

  ngOnInit() {
    this.place = {};
    this.placeService.listPlace().subscribe((res) => (this.places = res));
  }
  resetplace() {
    this.place.reset();
  }
}
