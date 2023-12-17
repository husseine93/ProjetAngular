// navbar.component.ts
import { Location } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { AuthentificationService } from '../shared/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {
  @Input() activeSearch: boolean = false;
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput: ElementRef | undefined;

  isScrolled = false;
  search: string = '';
  private searchTimeout: any;

  constructor(
    private el: ElementRef,
    private location: Location,
    private authentificationService: AuthentificationService
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  ngAfterViewInit(): void {
    if (this.searchInput && this.activeSearch) {
      this.searchInput.nativeElement.focus();

      this.searchInput.nativeElement.addEventListener('focusout', () => {
        if (!this.search.length) this.location.back();
      });
    }
  }

  onSearch(): void {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      this.searchEvent.emit(this.search);
    }, 300);
  }

  onLogout(): void {
    this.authentificationService.logout();
  }
}
