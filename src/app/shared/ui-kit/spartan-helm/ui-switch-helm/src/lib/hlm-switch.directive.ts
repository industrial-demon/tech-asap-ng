import { Directive, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva } from 'class-variance-authority';
import { ClassValue } from 'clsx';

const switchCss = cva([
  'relative overflow-hidden',
  'group inline-flex',
  'items-center justify-around',
  'peer h-[35px] w-[65px] shrink-0 cursor-pointer',
  'bg-white',
  'rounded-full border-2 border-gray-300',
  'transition-colors',
  'data-[state=checked]:bg-grey-80',
]);

@Directive({
  selector: 'brn-switch[hlm],[hlmSwitch]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmSwitchDirective {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(switchCss(), this._userCls());
  }
}
