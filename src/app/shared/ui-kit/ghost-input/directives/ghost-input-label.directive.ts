import { computed, Directive, Input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva, } from 'class-variance-authority';
import { ClassValue } from 'clsx';

const label = cva([
  'text-[#585858] opacity-80',
  'whitespace-nowrap',
  'absolute top-[calc(0.5rem+1px)] z-10 origin-[0] -translate-y-0 scale-75 transform text-body-3-r duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-4 peer-focus:scale-75',
]);

@Directive({
  selector: '[ghostInputLabel]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class GhostInputLabelDirective {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }
  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(label(), this._userCls());
  }
}
