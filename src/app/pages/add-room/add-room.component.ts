import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoomService } from '../../room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  private room = new FormGroup({
    name: new FormControl(),
    fits: new FormControl()
  })

  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit() {
  }

  addRoom() {
    this.roomService.addRoom(this.room.value.name, this.room.value.fits).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/rooms']);
      }
    })
  }

}
