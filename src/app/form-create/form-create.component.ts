import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../place';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
})
export class FormCreateComponent implements OnInit {
  place: Place = {
    type: '',
    address: '',
    city: '',
    host: '',
    contato: '',
  };

  constructor(private placeService: PlaceService, private router: Router) {}

  save(): void {
    //console.log(this.place);
    this.placeService
    .savePlace(this.place)
    .subscribe(() => alert('Alojamento Cadastrado'));
   this.router.navigate(['']);
  }
  ngOnInit() {}
}
