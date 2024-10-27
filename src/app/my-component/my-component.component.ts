import { Component } from '@angular/core';
import {Pokemon, PokeStats} from "../pokemon";
import {PokeapiService} from "../pokeapi.service";


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  id = null;
  pokemons :Pokemon[] = [];
  searchValue: string = ''; // Filtre
  selectedPokemonNumber: number | undefined;
  // @ts-ignore
  pokeStats :PokeStats;
  pageSize = 120;
  currentPage = 0;
  pokemonPerRow = 6;

  constructor(private service: PokeapiService) {
  }

  ngOnInit():void{
    this.service.getPokemons().subscribe((data) => {
      data.results.forEach((e:any, index:any) => {
        const newPokemon = new Pokemon(index + 1, e.name, e.url);

        this.service.getStats(index + 1).subscribe((stats) => {
          newPokemon.stats = stats;
        });
        this.pokemons.push(newPokemon);
      });
    });
    console.log(this.pokemons);

  }

  go(id:number){
    if (id == -1){
      if (this.selectedPokemonNumber != undefined){
        const pokemon = this.pokemons.find((pokemon) => pokemon.number == this.selectedPokemonNumber);

        this.service.getStats(this.selectedPokemonNumber).subscribe((data) => { this.pokeStats = data;})
      }
    }
    else{
      const pokemon = this.pokemons.find((pokemon) => pokemon.number == id);
      this.service.getStats(id).subscribe((data) => { this.pokeStats = data;})
    }
  }

  get paginatedPokemons(): Pokemon[][] {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    const currentPokemons = this.pokemons.slice(start, end);

    const rows: Pokemon[][] = [];
    for (let i = 0; i < currentPokemons.length; i += this.pokemonPerRow) {
      rows.push(currentPokemons.slice(i, i + this.pokemonPerRow));
    }
    return rows;
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.pokemons.length / this.pageSize) - 1) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}

