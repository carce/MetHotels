import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RoomService {
  private url = 'http://localhost/it255/metHotels-server/public/index.php';

  constructor(private http: Http) { }

  getRooms() {
    return this.http.get(this.url+'/rooms').map(res => res.json());
  }



}
