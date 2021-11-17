import { Component, Injectable, Input, Output } from '@angular/core';
import { Cep } from '../ceps';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class TopBarComponent {
  @Input() ceps: Cep[] | undefined;

  public findAll() {
    return this.ceps;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
