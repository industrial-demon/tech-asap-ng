import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class SliderService {
  thumbChanged = new Subject<DOMRect>();
  sliderChanged = new Subject<number[]>();

  constructor() {}

  onValueChange(val: number) {
    this.sliderChanged.next([val]);
  }

  onChangePostion(position: DOMRect) {
    this.thumbChanged.next(position);
  }
}
