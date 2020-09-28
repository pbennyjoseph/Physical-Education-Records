import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  isLoading = true;

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['/']);
      } else {
        this.isLoading = false;
      }
    });
  }

}
