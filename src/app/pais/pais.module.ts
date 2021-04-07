import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { TablaComponent } from './components/tabla/tabla.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    BusquedaComponent,
    TablaComponent
  ],
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
