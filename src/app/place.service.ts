import { Injectable } from '@angular/core';
import { Place, Places } from './place';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlaceService {
  constructor(private http: HttpClient) {}

  getPlace(place: string) {
    alert('https://airbnb-similar-angular.herokuapp.com/place/' + place)
    return this.http.get<Place[]>(
      'https://airbnb-similar-angular.herokuapp.com/place/' + place
    );
  }
}
