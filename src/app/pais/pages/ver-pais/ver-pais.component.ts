import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../service/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
pais!: Country
  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

this.activateRoute.params.pipe(
  switchMap(({id})=>this.paisService.getPaisPorAlpha(id))
   
).subscribe(
  pais=>{this.pais = pais;
  console.log(this.pais)}
    )

// this.activateRoute.params.subscribe(({id}) =>{
//   console.log(id)
//   this.paisService.getPaisPorAlpha(id).subscribe(
//     pais =>{
//       console.log(pais)
//     }
//   )
// }


  }

}
