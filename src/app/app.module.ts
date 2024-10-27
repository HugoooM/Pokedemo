import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule} from "@angular/common/http";
import { PokeapiService} from "./pokeapi.service";
import { PokestatsComponent } from './pokestats/pokestats.component';

import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInput} from "@angular/material/input";

import { ButtonModule } from "primeng/button";


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    PokestatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatInput,
    ButtonModule
  ],
  providers: [
    PokeapiService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
