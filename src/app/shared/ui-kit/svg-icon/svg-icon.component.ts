import { Component, Input, OnInit, computed, signal } from '@angular/core';
import { ClassValue } from 'class-variance-authority/dist/types';
import { ClassNameValue, twMerge } from 'tailwind-merge';

@Component({
  selector: 'svg-icon',
  standalone: true,
  template: `
    <svg>
      <use [attr.xlink:href]="path()" width="100%" height="100%"></use>
    </svg>
  `,
  host: {
    '[class]': '_computedClass()',
  },
})
export class SvgIconComponent {
  _iconName = signal<string>('');

  @Input({ required: true })
  set name(name: string) {
    this._iconName.set(name);
  }

  _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());

  protected path = computed(() => `assets/_sprite.svg#${this._iconName()}`);

  private _generateClass() {
    return twMerge(
      'inline-flex overflow-hidden',
      'w-10 h-10',
      '&>svg:all-inherit',
      this._userCls() as ClassNameValue
    );
  }
}
