import { Routes } from '@angular/router';
import { HomeComponent }      from './pages/home/home.component';
import { ScanComponent }      from './pages/scan/scan.component';
import { ProgressComponent }  from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '',          component: HomeComponent },
  { path: 'scan',      component: ScanComponent },
  { path: 'progress',  component: ProgressComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**',        redirectTo: '' }
];
