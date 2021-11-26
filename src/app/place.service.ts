import { Injectable } from '@angular/core';
import { Place, Places } from './place';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PlaceService {
  url = 'https://airbnb-similar-angular.herokuapp.com/place/';

  constructor(private http: HttpClient) {}

  getPlace(place: any) {
    return this.http.get<Array<Place>>(this.url + place);
  }
  listPlace() {
    return this.http.get<Array<Place>>(this.url);
  }

  savePlace(place:Place): Observable<Place>{
    return this.http.post<Place>(this.url, place);
  }
}
