import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokeStats} from "./pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  constructor(private http: HttpClient) {
  }
  getPokemons(): Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
  }

  getStats(pokemon: number | undefined): Observable<PokeStats>{
    return this.http.get<PokeStats>('https://pokeapi.co/api/v2/pokemon/' + pokemon);
  }

}
