import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

private apiUrl : string = "https://restcountries.eu/rest/v2"

  constructor( private http: HttpClient) { }

get httpParams():HttpParams{
  return new HttpParams().set(
    "fields","name;capital;alpha2Code;flag;population"
  )
}


buscarPais(termino: string):Observable<Country[]>{
   
  const url = `${this.apiUrl}/name/${termino}`
  return this.http.get<Country[]>(url,{params:this.httpParams})

}
buscarCapital(termino: string):Observable<Country[]>{
  const params = new HttpParams().set(
    "fields","name;capital;alpha2Code;flag;population"
  )
  const url = `${this.apiUrl}/capital/${termino}`
  return this.http.get<Country[]>(url,{params:this.httpParams})

}

getPaisPorAlpha(id: string):Observable<Country>{
  const params = new HttpParams().set(
    "fields","name;capital;alpha2Code;numericCode;flag;population;translations"
  )
  const url = `${this.apiUrl}/alpha/${id}`
  return this.http.get<Country>(url,{params})

}
getRegion(id: string):Observable<Country[]>{
  const params = new HttpParams().set(
    "fields","name;capital;alpha2Code;flag;population"
  )
  const url = `${this.apiUrl}/region/${id}`
  return this.http.get<Country[]>(url,{params:this.httpParams})

}

}
