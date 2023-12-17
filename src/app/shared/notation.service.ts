import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotationService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  addNotation(notationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/notes`, notationData);
  }
  getNotesByIdFilm(filmId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/notes?IdFilm=${filmId}`);
  }
}
