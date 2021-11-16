import { Injectable } from '@angular/core';
import { Place, Places } from './place';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlaceService {
  //url = 'https://airbnb-similar-angular.herokuapp.com/place/';
  url = '192.168.15.19/:8080/place/';
  constructor(private http: HttpClient) {}

  getPlace(place: any) {
    return this.http.get<Array<Place>>(this.url + place);
  }
  listPlace() {
    return this.http.get<Array<Place>>(this.url);
  }
}
