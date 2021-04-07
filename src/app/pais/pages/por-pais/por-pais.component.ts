import { Component } from '@angular/core';
import { PaisService } from '../../service/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [

  ]
})
export class PorPaisComponent {
  placeholder: string = "Buscar por País"
  termino: string = "espa"
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.paisService.buscarPais(termino).subscribe(
      paises => {
        this.paises = paises;
        console.log(paises)
      },
      err => {
        this.hayError = true;
        this.paises = []
        console.log(err)
      }
    )
    console.log(termino)
  }


  sugerencias(termino: string) {
    console.log(termino)
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true

    this.paisService.buscarPais(termino).subscribe(
      paises => this.paisesSugeridos = paises.splice(0, 5)
      , _ => this.paisesSugeridos = []
    )
  }
  buscarSugerido(termino: string) {
    console.log(termino)
    this.buscar(termino)
  }

}
