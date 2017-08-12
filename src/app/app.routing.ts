import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const app_routes: Routes = [
    { path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(app_routes);