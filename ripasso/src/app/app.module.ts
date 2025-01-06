import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { HomeComponent } from './home/home.component';
import { PokemondetailsComponent } from './pokemondetails/pokemondetails.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonlistComponent,
    HomeComponent,
    PokemondetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
