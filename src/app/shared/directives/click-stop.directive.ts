import {
  Directive,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[stopPropagation]',
  standalone: true,
})
export class ClickStopDirective {
  constructor() {}

  @HostListener('click', ['$event'])
  onCLick(event: MouseEvent) {
    event.stopPropagation();
  }
}
