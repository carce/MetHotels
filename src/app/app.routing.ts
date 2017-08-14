import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogInComponent } from './pages/log-in/log-in.component';

const app_routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'rooms', component: RoomsComponent},
    { path: 'addroom', component: AddRoomComponent},
    { path: 'login', component: LogInComponent},
    { path: 'register', component: RegisterComponent}
];

export const routing = RouterModule.forRoot(app_routes);