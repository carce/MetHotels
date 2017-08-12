import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Object[];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe(data => {
      this.rooms = data;
    })
  }

}
