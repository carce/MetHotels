import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { routing } from './app.routing';
import { RoomService } from './room.service';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomFilterPipe } from './room-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    RoomsComponent,
    RoomFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [
    RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
