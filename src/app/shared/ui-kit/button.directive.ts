import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  booleanAttribute,
  SimpleChanges,
} from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';

const button = cva('button-base', {
  variants: {
    color: {
      green: 'text-green border border-green',
      red: 'text-red border border-red',
      blue: 'text-blue border border-blue',
    },
    size: {
      small: 'h-[34px]',
      medium: 'h-10',
    },
    filled: {
      true: '',
      false: '',
    },

    transparency: {
      true: 'opacity-1',
      false: '',
    },

    rounded: {
      lg: 'rounded-[10px]',
      md: 'rounded-md',
    },
  },
  compoundVariants: [
    { filled: true, color: 'green', class: 'bg-green text-white' },
    { filled: true, color: 'red', class: 'bg-red text-white' },
    { filled: true, color: 'blue', class: 'bg-blue text-white' },
  ],
  defaultVariants: {
    size: 'medium',
    rounded: 'md',
  },
});

type Button = Required<
  Pick<
    VariantProps<typeof button>,
    'color' | 'filled' | 'rounded' | 'size' | 'transparency'
  >
>;

type ButtonVariant<K extends keyof Button> = Exclude<Button[K], null>;

@Directive({
  selector: '[ns-button]',
  standalone: true,
})
export class ButtonDirective implements OnChanges {
  @Input()
  color: ButtonVariant<'color'> = 'green';

  @Input()
  size: ButtonVariant<'size'> = 'small';

  @Input()
  rounded: ButtonVariant<'rounded'> = 'md';

  @Input({ transform: booleanAttribute })
  filled!: ButtonVariant<'filled'>;

  @Input({ transform: booleanAttribute })
  transparency!: ButtonVariant<'transparency'>;

  @HostBinding('class')
  private classes = '';

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.classes = button({
      color: changes['color']?.currentValue,
      rounded: changes['rounded']?.currentValue,
      filled: changes['filled']?.currentValue,
      size: changes['size']?.currentValue,
      transparency: changes['transparency']?.currentValue,
    });
  }
}
