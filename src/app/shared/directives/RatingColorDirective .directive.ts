import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRatingColor]',
})
export class RatingColorDirective {
  @Input('appRatingColor') set appRatingColor(value: number) {
    if (value < 2) {
      this.setColor('red');
    } else if (value >= 2 && value < 4) {
      this.setColor('orange');
    } else {
      this.setColor('green');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private setColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
