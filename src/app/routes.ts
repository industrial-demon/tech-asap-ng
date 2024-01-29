import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ManageComponent } from './pages/manage/manage.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routerConfig: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,

    children: [
      {
        path: 'manage',
        title: 'Manage',
        component: ManageComponent,
      },
      {
        path: 'monitor',
        title: 'Monitor',
        component: MonitorComponent,
      },
      {
        path: 'connections',
        title: 'Connections',
        component: ConnectionsComponent,
      },
      {
        path: 'admin',
        title: 'Admin',
        component: AdminComponent,
      },
    ],
  },
  {
    path: 'auth',
    title: 'Auth',
    component: AuthComponent,
  },
  { path: '**', component: NotFoundComponent },
];
