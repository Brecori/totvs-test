import { Routes } from '@angular/router';
import { SelectControl } from './pages/select-control/select-control';
import { SwitchControl } from './pages/switch-control/switch-control';

export const routes: Routes = [
  { path: '', redirectTo: 'switch', pathMatch: 'full' },
  { path: 'switch', component: SwitchControl },
  { path: 'select', component: SelectControl },
];
