import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  BrnSwitchComponent,
  BrnSwitchThumbComponent,
} from '@spartan-ng/ui-switch-brain';
import {
  HlmSwitchDirective,
  HlmSwitchThumbDirective,
} from './spartan-helm/ui-switch-helm/src';

@Component({
  selector: 'switch',
  standalone: true,
  imports: [
    BrnSwitchComponent,
    BrnSwitchThumbComponent,
    HlmSwitchDirective,
    HlmSwitchThumbDirective,
  ],
  template: `
    <label class="flex items-center">
      <brn-switch class="mr-2" hlm [checked]="checked" (changed)="onChange($event)">
        <brn-switch-thumb hlm />
      </brn-switch>
    </label>
  `,
})
export class Switch {
  @Input() checked: boolean = false;
  @Output() onCheckedChange = new EventEmitter<boolean>();

  onChange(checked: boolean) {
    this.onCheckedChange.emit(checked);
  }
}
