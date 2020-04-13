import { Component, OnInit } from '@angular/core';
import { PokemonBackendService } from '../pokemon-backend.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokemonBackendService],
})
export class PokemonListComponent implements OnInit {
  public pokemonList: Pokemon[];

  constructor(private pokemonBackendService: PokemonBackendService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList(): void {
    this.pokemonBackendService
      .getPokemonList()
      .subscribe((pokemonList) => (this.pokemonList = pokemonList));
  }
}
