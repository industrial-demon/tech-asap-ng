import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SliderComponent } from '../../shared/slider/slider.component';
import { SliderService } from '../../shared/slider/slider.service';

@Component({
  selector: 'connections-page',
  standalone: true,
  imports: [],
  providers: [SliderService],
  templateUrl: './connections.component.html',
  styleUrl: './connections.component.css',
})
export class ConnectionsComponent implements OnInit, OnDestroy {
  constructor(private sliderComponent: SliderService) {}
  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
