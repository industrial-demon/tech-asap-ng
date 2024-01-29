import {
  Directive,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[autofocus]',
  standalone: true,
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private element: ElementRef<HTMLInputElement>) {}

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }
}
