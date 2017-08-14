import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  private user = false;

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.user = isLoggedIn as boolean;
      console.log(isLoggedIn);
    });
    this.authService.checkIfLoggedIn();
    
    let firstNav = document.getElementsByTagName('nav')[0]

    let prevScroll = 0
    window.addEventListener('scroll', e => {
        if (window.scrollY < firstNav.parentElement.offsetTop && firstNav.classList.contains('fixed')) {
            firstNav.classList.remove('fixed')
        }
        else if (window.scrollY > firstNav.parentElement.offsetTop && !firstNav.classList.contains('fixed')) {
            firstNav.classList.add('fixed')
        }
    })
  }

  onLogout() {
    this.authService.logOut();
    this.router.navigate(['/home']);
  }

}
