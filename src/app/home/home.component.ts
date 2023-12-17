import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../shared/category.service';
import { FilmService } from '../shared/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: any = [];
  firstFilm: any = {};

  constructor(
    private categoryService: CategoryService,
    private filmService: FilmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadRandomFilm();
    this.checkUser();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  loadRandomFilm(): void {
    this.filmService.getRandomFilm().subscribe((film) => {
      this.firstFilm = film;
    });
  }

  checkUser(): void {
    // if (!localStorage.getItem('user')) {
    //   this.router.navigate(['/login']);
    // }
  }
}
