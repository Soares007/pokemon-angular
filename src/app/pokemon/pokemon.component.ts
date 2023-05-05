import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  poke: Pokemon = {} as Pokemon;

  constructor(private service: PokemonService){}


  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.service.getPokemon().subscribe(
      {
        next : data => this.poke = data
      }
    );
  }

  pokeName() {
  return this.poke.name.split("-");
  }

  proxPoke() {
    this.service.pokemonId++;
    this.loadPokemon();
  }

  antPoke() {
    this.service.pokemonId--;
    this.loadPokemon();
  }

  calculateProgressBarWidth(baseStat: number): string {
    return ((baseStat / 255) * 100) + '%';
    }

    getStatClass(baseStat: number): string {
      if (baseStat < 50) {
        return 'low';
      } else if (baseStat < 100) {
        return 'medium';
      } else {
        return 'high';
      }
    }
}
