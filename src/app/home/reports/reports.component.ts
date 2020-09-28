import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  isLoading = true;
  events: any[];
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData().then(data => {
      this.events = data;
      for (const i of this.events){
        i['Time of record entry'] = new Date(i['Time of record entry']);
      }
      console.log(this.events);
      this.isLoading = false;
    });
  }

}
