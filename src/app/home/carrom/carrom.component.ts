import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../data.service';

declare var $: any;

@Component({
  selector: 'app-carrom',
  templateUrl: './carrom.component.html',
  styleUrls: ['./carrom.component.css']
})
export class CarromComponent implements OnInit {

  matchDetails: FormGroup = new FormGroup({
    team1_name: new FormControl(null),
    team2_name: new FormControl(null),
    team3_name: new FormControl('None'),
    team4_name: new FormControl('None'),
    t1_player1_name: new FormControl(null),
    t2_player1_name: new FormControl(null),
    t1_player2_name: new FormControl(null),
    t2_player2_name: new FormControl(null),
    t1_player3_name: new FormControl(null),
    t2_player3_name: new FormControl(null),
    winning_team: new FormControl(null),
    time_spent_playing: new FormControl(null),
  });

  submitProgress = false;
  submitText = 'Submit';

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    $('.toast').hide();
  }

  resetForm(): void {
    this.matchDetails = new FormGroup({
      team1_name: new FormControl(null),
      team2_name: new FormControl(null),
      team3_name: new FormControl('None'),
      team4_name: new FormControl('None'),
      t1_player1_name: new FormControl(null),
      t2_player1_name: new FormControl(null),
      t1_player2_name: new FormControl(null),
      t2_player2_name: new FormControl(null),
      t1_player3_name: new FormControl(null),
      t2_player3_name: new FormControl(null),
      winning_team: new FormControl(null),
      time_spent_playing: new FormControl(null),
    });
  }


  async onSubmit(): Promise<void> {
    this.submitProgress = true;
    this.submitText = 'Sending Form Data...';
    console.log(this.matchDetails.value);
    const data = this.matchDetails.value;
    const finalDoc = {
      Game : 'Carrom',
      'Time of record entry': Date.now(),
      'Winning Team': data.winning_team,
      'Time Played': data.time_spent_playing,
      'Player 1 Name': data.team1_name,
      'Player 2 Name': data.team2_name,
      'Player 3 Name': data.team3_name,
      'Player 4 Name': data.team4_name,
      'Player 1 Round 1 Score': data.t1_player1_name,
      'Player 1 Round 2 Score': data.t1_player2_name,
      'Player 1 Round 3 Score': data.t1_player3_name,
      'Player 2 Round 1 Score': data.t2_player1_name,
      'Player 2 Round 2 Score': data.t2_player2_name,
      'Player 2 Round 3 Score': data.t2_player3_name,
    };
    await this.dataService.submitData(finalDoc);
    $('.toast').show().toast({delay: 3000}).toast('show');
    this.submitProgress = false;
    this.submitText = 'Submit';
    this.resetForm();
  }

}
