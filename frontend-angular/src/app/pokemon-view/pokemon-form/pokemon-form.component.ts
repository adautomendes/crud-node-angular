import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonBackendService } from '../pokemon-backend.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
  providers: [PokemonBackendService],
})
export class PokemonFormComponent implements OnInit {
  public pokemon: Pokemon;

  constructor(private pokemonBackendService: PokemonBackendService) {}

  ngOnInit(): void {}
}
