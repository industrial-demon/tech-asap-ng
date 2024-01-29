import { Directive, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva } from 'class-variance-authority';
import { ClassValue } from 'clsx';

const switchThumbCss = cva([
  'absolute left-0 z-[1]',
  'pointer-events-none block',
  'h-[25px] w-[25px] bg-green-70',
  'rounded-full',
  'shadow-lg ring-0',
  'bg-green',
  'transition-transform',
  'group-data-[state=checked]:translate-x-[33px] group-data-[state=unchecked]:translate-x-[4px]',
]);

@Directive({
  selector: 'brn-switch-thumb[hlm],[hlmSwitchThumb]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmSwitchThumbDirective {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(switchThumbCss(), this._userCls());
  }
}
