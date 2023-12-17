import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css'],
})
export class FilmCardComponent {
  @Input() film: any;
}
