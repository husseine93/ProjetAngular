import { Component } from '@angular/core';
import { FilmService } from '../shared/film.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  films: any = [];
  search: string = '';

  constructor(private filmService: FilmService, private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  handleSearchEvent(search: string): void {
    this.search = search;
    if (!search.length) {
      this.films = [];
      return;
    }
    this.filmService.getFilmsBySearch(search).subscribe((films) => {
      this.films = films;
    });
  }
}
