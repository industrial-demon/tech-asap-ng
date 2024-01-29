import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavBarComponent } from '~/features/nav-bar/nav-bar.component';
import { LocalStorageService } from '~/services/local-storage.service';
import { Switch } from '~/ui-kit/switch.component';

const THEME_KEY = 'data-theme';
type ThemeEnum = 'light' | 'dark';
@Component({
  selector: 'ns-header',
  standalone: true,
  imports: [NavBarComponent, Switch],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isLightTheme = true;
  private localStorageService = inject(LocalStorageService);
  storegaData$ = this.localStorageService.myData$;
  subscription!: Subscription;

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;
    const value = this.isLightTheme ? 'light' : 'dark';
    document.documentElement.setAttribute(THEME_KEY, value);
    this.localStorageService.setInfo(THEME_KEY, value);
  }

  initTheme(val: ThemeEnum) {
    if (val === 'light') {
      this.isLightTheme = true;
    } else {
      this.isLightTheme = false;
    }
    const value = this.isLightTheme ? 'light' : 'dark';
    document.documentElement.setAttribute(THEME_KEY, value);
  }

  ngOnInit(): void {
    this.localStorageService.loadInfo(THEME_KEY);
    this.subscription = this.storegaData$.subscribe((val) => {
      this.initTheme(val);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
