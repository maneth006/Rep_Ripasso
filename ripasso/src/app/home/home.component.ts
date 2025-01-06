import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root, Result } from '../moduls/home.moduls';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tipidata! : Root
  o! : Observable<any>
  loading! : boolean

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.loading = true; 
    this.o = this.http.get<Root>('https://pokeapi.co/api/v2/type');
    this.o.subscribe(this.getData);
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  getData = (d: any) => {
    console.log(d); 
    this.tipidata = d;
    this.loading = false;
  }

  getRouterParam = (params: ParamMap) =>
    {
      let uri_param = params.get('id'); 
      console.log (uri_param); 
      
    }


}
