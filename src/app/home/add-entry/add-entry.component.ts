import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  constructor(private route: ActivatedRoute, public router: Router) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    switch (this.route.snapshot.params.gameid) {
      case 'volleyball':
        this.router.navigate(['../../volleyball'], {relativeTo: this.route});
        break;
      case 'chess':
        this.router.navigate(['../../chess'], {relativeTo: this.route});
        break;
      case 'cricket':
        this.router.navigate(['../../cricket'], {relativeTo: this.route});
        break;
      case 'carrom':
        this.router.navigate(['../../carrom'], {relativeTo: this.route});
        break;
      case 'basketball':
        this.router.navigate(['../../basketball'], {relativeTo: this.route});
        break;
      case 'tabletennis':
        this.router.navigate(['../../tabletennis'], {relativeTo: this.route});
        break;
      case 'badminton':
        this.router.navigate(['../badminton'], {relativeTo: this.route});
        break;
      default:
        this.router.navigate(['../../dashboard'], {relativeTo: this.route});
    }
  }

}
