import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { SliderService } from './slider.service';
import { Observable, Subscription } from 'rxjs';
import {
  CdkDragHandle,
  CdkDrag,
  CdkDropListGroup,
  CdkDropList,
  CdkDragEnd,
  CdkDragMove,
  CdkDragStart,
} from '@angular/cdk/drag-drop';
import { SliderRangeDirective } from './slider-range.directive';
import { ClickStopDirective } from '../directives/click-stop.directive';

@Component({
  selector: 'ns-slider',
  standalone: true,
  imports: [
    SliderRangeDirective,
    ClickStopDirective,
    CdkDragHandle,
    CdkDrag,
    CdkDropListGroup,
    CdkDropList,
  ],
  providers: [SliderService],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})

export class SliderComponent implements OnInit, OnDestroy {
  value: number[] = [];
  private subscription: Subscription | undefined;
  constructor(readonly sliderService: SliderService) {}


  rootClicked = false

  @ViewChild('sliderRoot')
  sliderRoot!: ElementRef<HTMLElement>;

  @ViewChild('sliderThumb')
  sliderThumb!: ElementRef<HTMLElement>;

  onClick(event: MouseEvent) {

    this.rootClicked = true;

    const thumb = this.sliderThumb.nativeElement;
    thumb.style.setProperty(
      'transform',
      `translate3d(${
        event.clientX - this.sliderRoot.nativeElement.clientWidth
      }px, 0px , 0px)`
    );

    // this.sliderService.onChangePostion(thumb.getBoundingClientRect());
  }

  ngOnInit(): void {
    this.subscription = this.sliderService.sliderChanged.subscribe((value) => {
      this.value = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onChange(event:Event): void {
    console.log((event.target as HTMLInputElement).files)
  
  }
  dragEnd($event: CdkDragEnd) {
    // console.log($event.source, 'DRAG POS');
  }

  dragMoved(cdkEvent: CdkDragMove) {

    cdkEvent.event.stopPropagation()
    // const element = event.source.getRootElement();
    // const position = element.getBoundingClientRect();
    // this.sliderService.onChangePostion(position);
  }

  dragStarted(event: CdkDragStart) {}
}
