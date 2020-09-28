import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  signOut(): void {
    this.auth.signOut();
    this.router.navigate(['/login']);
  }

}
