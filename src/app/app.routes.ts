import { Routes } from '@angular/router';
import { GlobalComponent } from './layout/global/global.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';

export const routes: Routes = [
  {
    path: '',
    component: GlobalComponent,
    children: [
        { path: '', component: AccueilComponent },
        { path: '**', component: DynamicComponent }
    ],
  },
];
