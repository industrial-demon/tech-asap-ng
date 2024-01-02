import { Component, Directive, HostBinding, Input } from '@angular/core';
import {
  HlmInputDirective,
  HlmInputModule,
} from '../spartan-helm/ui-input-helm/src';
import { cva } from 'class-variance-authority';

const nsInput = cva('ns-input bg-rose-400',  );

@Directive({
  selector: '[inputDirective]',
  standalone: true,
  hostDirectives: [
    {
      directive: HlmInputDirective,
      inputs: ['size', 'class', 'error'],
    },
  ],
})
export class InputDirective {

  @HostBinding('class')
  private classes: string = nsInput()
}
