import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  placeholder:string="Buscar por Capital"
  termino: string = "espa"
  hayError: boolean = false;
  paises: Country[] = [];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.hayError = false;
    this.paisService.buscarCapital(termino).subscribe(
      res => {
        this.paises = res;
        console.log(res)
      },
      err => {
        this.hayError = true;
        this.paises = []
        console.log(err)
      }
    )
    console.log(termino)
  }
  sugerencias(termino:string){
    
  }
}
