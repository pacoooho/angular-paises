import { Component  } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 10px;
    }`
  ]
})
export class PorRegionComponent   {
regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
regionActiva : string =""; 
paises:Country[]=[];
constructor( 
  private paisService: PaisService
  ) { }
 
activaRegion(region: string){
  if ( region=== this.regionActiva)return
  this.regionActiva=region;
  this.paises=[]
  this.paisService.getRegion(region).subscribe(
    paises =>{
        this.paises=paises 
      console.log(paises)
      })

}

getCss(region: string):string{
return (region===this.regionActiva)
? 'btn-primary'
: 'btn-outline-primary'

}
}
