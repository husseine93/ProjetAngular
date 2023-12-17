import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getFilmById(filmId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/films/${filmId}`);
  }

  getFilmsByCategory(categoryId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/films?IdCategorie=${categoryId}`);
  }

  getRandomFilm(): Observable<any> {
    const randomId = Math.floor(Math.random() * 10) + 1;
    return this.http.get<any>(`${this.apiUrl}/films/${randomId}`);
  }

  getFilmsBySearch(search: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/films?q=${search}`);
  }
}
