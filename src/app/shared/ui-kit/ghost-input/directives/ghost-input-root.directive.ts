import { computed, Directive, Input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

export const root = cva('relative z-0 bg-white');
type InputVariants = VariantProps<typeof root>;

@Directive({
  selector: '[ghostInputRoot]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class GhostInputRootDirective {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }
  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(root(), this._userCls());
  }
}
