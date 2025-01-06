import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPokemon } from '../moduls/pokemonlist.moduls';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent {
  o! : Observable<ListaPokemon>
  pokedata! : ListaPokemon
  loading! : boolean
  url = 'https://pokeapi.co/api/v2/type/'

  constructor(private http: HttpClient, private route: ActivatedRoute) {
      this.loading = true; 
      this.route.paramMap.subscribe(this.getRouterParam);
    }

    getRouterParam = (params: ParamMap) =>
      {
        this.o = this.http.get<ListaPokemon>(this.url + params.get('id'))
        this.o.subscribe(this.getData)
      }
      getData = (data : ListaPokemon) =>
        {
          this.loading= false
          this.pokedata = data
        }
}
