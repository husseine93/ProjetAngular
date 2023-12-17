import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from 'src/app/shared/film.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() category: any;
  films: any = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmService.getFilmsByCategory(this.category.id).subscribe((films) => {
      this.films = films;
    });
  }
}
