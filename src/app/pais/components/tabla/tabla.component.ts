import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
 })
export class TablaComponent implements OnInit {


@Input() paises: Country[]=[];


  constructor() { }

  ngOnInit(): void {
  }

}
