import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './shared/slider/slider.component';
import { SliderService } from './shared/slider/slider.service';
import { ConnectionsComponent } from './pages/connections/connections.component';

import { RouterModule } from '@angular/router';
import { ButtonDirective } from './shared/ui-kit/button.directive';
import { Switch } from './shared/ui-kit/switch.component';
import { InputDirective } from './shared/ui-kit/input/input.component';
import { GhostInputComponent } from './shared/ui-kit/ghost-input';
import { PageLayoutComponent } from './features/page-layout/page-layout.component';
import { environment } from './../environments/environment';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { SvgIconComponent } from '~/ui-kit/svg-icon/svg-icon.component';
@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    PageLayoutComponent,
    SliderComponent,
    ConnectionsComponent,
    Switch,
    GhostInputComponent,
    InputDirective,
    ButtonDirective,
    NavBarComponent,
    SvgIconComponent,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tech-asap-ng';
  constructor() {
    console.log();
  }

  onClick() {
    // this.sliderService.onValueChange(5);
  }
}
