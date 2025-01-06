import { Component } from '@angular/core';
import { pokeDetail } from '../moduls/pokemondetails.moduls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.css']
})
export class PokemondetailsComponent {
  o! : Observable<pokeDetail>
  pokedata! : pokeDetail
  loading! : boolean
  url = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient, private route: ActivatedRoute) {
        this.loading = true; 
        this.route.paramMap.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    this.o = this.http.get<pokeDetail>(this.url + params.get('nome'))
    this.o.subscribe(this.getData)
  }
    getData = (data : pokeDetail) =>
    {
      this.loading= false
      this.pokedata = data
    }
}
