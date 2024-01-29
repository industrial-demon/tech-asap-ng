import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgIconComponent } from '~/ui-kit/svg-icon/svg-icon.component';

interface NavLink {
  id: number;
  href: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'ns-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, SvgIconComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  navLinks: NavLink[] = [
    {
      id: 1,
      title: 'Dashboard',
      icon: 'dashboard',
      href: '/dashboard',
    },
    {
      id: 2,
      title: 'Manage',
      icon: 'manage',
      href: '/dashboard/manage',
    },
    {
      id: 3,
      title: 'Monitor',
      icon: 'monitor',
      href: '/dashboard/monitor',
    },
    {
      id: 4,
      title: 'Connections',
      icon: 'connections',
      href: '/dashboard/connections',
    },
    {
      id: 5,
      title: 'Admin',
      icon: 'admin',
      href: '/dashboard/admin',
    },
  ];
}
