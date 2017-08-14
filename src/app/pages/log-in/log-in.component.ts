import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  private login = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.logIn(this.login.value.username, this.login.value.password)
    .subscribe(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/home']);
      }
    })
  }

}
