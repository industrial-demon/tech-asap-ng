import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  booleanAttribute,
  signal,
} from '@angular/core';
import { cva } from 'class-variance-authority';
import { GhostInputLabelDirective } from './directives/ghost-input-label.directive';
import { GhostInputPrimitiveDirective } from './directives/ghost-input.directive';
import { GhostInputRootDirective } from './directives/ghost-input-root.directive';

@Component({
  selector: 'ns-ghost-input',
  standalone: true,
  templateUrl: './ghost-input.component.html',
  imports: [
    GhostInputRootDirective,
    GhostInputLabelDirective,
    GhostInputPrimitiveDirective,
  ],
})
export class GhostInputComponent {
  @Input()
  label: string = '';

  @Input()
  value: string = '';

  @Output() onChangeValue = new EventEmitter();

  protected _checked = signal(false);

  @Input({ transform: booleanAttribute })
  set checked(value: boolean) {
    this._checked.set(value);
  }

  onChangeInput(event: Event) {
    this.onChangeValue.emit((event.target as HTMLInputElement).value);
  }
}
