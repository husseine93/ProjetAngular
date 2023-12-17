import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FilmComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './home/category/category.component';
import { SearchComponent } from './search/search.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { NotationComponent } from './notation/notation.component';
import { RoundNumberPipe } from './pipes/round-number.pipe';
import { RatingColorDirective } from './shared/directives/RatingColorDirective .directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    FilmComponent,
    CategoryComponent,
    SearchComponent,
    FilmCardComponent,
    NotationComponent,
    RoundNumberPipe,
    RatingColorDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
