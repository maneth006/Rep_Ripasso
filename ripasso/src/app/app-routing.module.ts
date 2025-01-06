import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home/:tipo', component: PokemonlistComponent },
  { path: 'home', component: HomeComponent },
  {path: '', redirectTo :'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
