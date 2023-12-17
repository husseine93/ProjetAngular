import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmComponent } from './films.component';

describe('FilmsComponent', () => {
  let component: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmComponent]
    });
    fixture = TestBed.createComponent(FilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
