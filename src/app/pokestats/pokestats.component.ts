import {Component, Input} from '@angular/core';
import {LocationArea, PokeStats} from "../pokemon";
import {PokeapiService} from "../pokeapi.service";

@Component({
  selector: 'app-pokestats',
  templateUrl: './pokestats.component.html',
  styleUrl: './pokestats.component.css'
})
export class PokestatsComponent {
  @Input() pokeStats: PokeStats | undefined;

  constructor(private service: PokeapiService) {
  }


  typeColors: { [key: string]: string } = {
    grass: '#78C850',
    fire: '#F08030',
    water: '#6890F0',
    bug: '#A8B820',
    normal: '#A8A878',
    poison: '#A040B0',
    electric: '#F8D030',
    ground: '#E0C068',
    fairy: '#F0B6E0',
    fighting: '#C03028',
    psychic: '#F85888',
    rock: '#B8A038',
    ghost: '#705898',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    flying: '#A98FF0',
  };

  getTypeColor(type: string): string {
    return this.typeColors[type] || '#000000';
  }
}
