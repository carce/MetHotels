import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Array<{id}>;

  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe(data => {
      this.rooms = data;
    })
  }

  add() {
    this.router.navigate(['/addroom']);
  }

  delete(id) {
    this.roomService.deleteRoom(id).subscribe(data => {
      if (data) {
        let roomToDelete = this.rooms.find(room => room.id === id);
        let roomIndex = this.rooms.indexOf(roomToDelete);
        this.rooms.splice(roomIndex, 1);
      }
    })
  } 

}
