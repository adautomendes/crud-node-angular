import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonBackendService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemon');
  }
}
