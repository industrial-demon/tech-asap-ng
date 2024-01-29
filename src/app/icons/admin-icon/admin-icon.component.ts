import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ns-admin-icon',
  standalone: true,
  imports: [],
  templateUrl: './admin-icon.component.svg',
  styleUrl: './admin-icon.component.css',
})
export class AdminIconComponent {
  
  _fillColor = '';
  @Input()
  set color(value: string) {
    this._fillColor = value;
  }

  @HostBinding('class')
  private get classes() {
    return this._fillColor
  }
}
