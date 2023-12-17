import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../shared/film.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { NotationService } from '../shared/notation.service';
@Component({
  selector: 'app-film',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmComponent implements OnInit {
  film: any;
  notations: any[] = [];
  moyenneNote: number = 0;
  index: number = 0;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private sanitizer: DomSanitizer,
    private location: Location,
    private notationService: NotationService,

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const filmId = +params['id'];
      this.loadFilmDetails(filmId);

      this.notationService.getNotesByIdFilm(filmId).subscribe((notations) => {
        notations.forEach((element: any) => {
          this.moyenneNote = this.moyenneNote + element.note;
          this.index = this.index + 1;
        });
        this.moyenneNote = this.moyenneNote / this.index;
      });
    });
  }

  goBack(): void {
    this.location.back();
  }

  loadFilmDetails(filmId: number): void {
    this.filmService.getFilmById(filmId).subscribe((film) => {
      this.film = film;
    });
  }

  getSafeYoutubeUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
