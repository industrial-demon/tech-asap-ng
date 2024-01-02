import {
  Directive,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  AfterContentInit,
  OnDestroy,
} from '@angular/core';
import { SliderService } from './slider.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[nsSliderRange]',
  standalone: true,
  providers: [],
})
export class SliderRangeDirective
  implements OnChanges, OnInit, AfterContentInit, OnDestroy
{
  subscription: Subscription | undefined;
  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private sliderService: SliderService
  ) {}

  ngAfterContentInit(): void {
    const coords = this.elementRef.nativeElement.getBoundingClientRect();
    this.subscription = this.sliderService.thumbChanged
      .pipe()
      .subscribe((value) => {
        this.elementRef.nativeElement.style.width =
          value.left - coords.left + 5 + 'px';
      });
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.height = '10px';
    this.elementRef.nativeElement.style.width = '100%';
    this.elementRef.nativeElement.style.display = 'flex';
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
