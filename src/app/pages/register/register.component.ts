import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private register = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.register.value.firstName, this.register.value.lastName
    , this.register.value.username, this.register.value.password)
    .subscribe(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/home']);
      }
    })
  }

}
