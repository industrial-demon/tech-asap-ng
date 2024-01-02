import { Component } from '@angular/core';
import {
    BrnSwitchComponent,
    BrnSwitchThumbComponent,
} from '@spartan-ng/ui-switch-brain';
import { HlmSwitchDirective, HlmSwitchThumbDirective } from './spartan-helm/ui-switch-helm/src';


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
    <brn-switch class="mr-2" hlm>
        <brn-switch-thumb hlm />
      </brn-switch>
    </label>

  `,
})
export class Switch { }
