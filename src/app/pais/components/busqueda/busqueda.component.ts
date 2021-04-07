import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',

})
export class BusquedaComponent implements OnInit {

  termino: string = ""
  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
@Input() placeholder:string="Buscar..."
  debounce: Subject<string> = new Subject();

  constructor() { }

  ngOnInit() {
    this.debounce.pipe(
      debounceTime(300)
    ).subscribe(valor => { 
      this.onDebounce.emit(valor) })
  }
  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debounce.next(this.termino)
     
  }
}
