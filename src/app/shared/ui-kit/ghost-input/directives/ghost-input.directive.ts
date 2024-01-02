import { computed, Directive, Input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

const input = cva(
  [
    'peer block w-full appearance-none border-0 border-b bg-transparent px-0 pt-3 pb-1 text-body-3-r focus:outline-none focus:ring-0',
    'text-[#2D3436]',
  ],
  {
    variants: {
      invalid: {
        true: ' border-red hover:border-red-400',
        false: 'focus:grey-100 border-green hover:border-x-green',
      },
    },
  }
);

type InputVariants = VariantProps<typeof input>;

@Directive({
  selector: '[ghostInput]',
  exportAs: '[inputPrimitive]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class GhostInputPrimitiveDirective {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }
  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(input(), this._userCls());
  }
}
