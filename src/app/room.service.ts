import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RoomService {
  private url = 'http://localhost/it255/metHotels-server/public/index.php';

  constructor(private http: Http) { }

  getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return headers;
  }

  getRooms() {
    return this.http.get(this.url+'/rooms').map(res => res.json());
  }

  addRoom(name, fits) {
    let data = 'name=' + name + '&fits=' + fits;
    return this.http.post(this.url+'/addroom', data, {headers: this.getHeaders()}).map(res => res.json());
  }

  deleteRoom(id) {
    let data = 'id=' + id;
    return this.http.post(this.url+'/deleteroom', data, {headers: this.getHeaders()}).map(res => res.json());
  }


}
