import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor( private http: HttpClient ) {

  }
  pokemonId: number = Math.floor(Math.random() * (1010 + 1) + 1);

  getPokemon(): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`);
  }
}
