import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../data.service';

declare var $: any;

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {
  matchDetails: FormGroup = new FormGroup({
    team1_name: new FormControl(null),
    team2_name: new FormControl(null),
    team1_score: new FormControl(null),
    team2_score: new FormControl(null),
    t1_player1_name: new FormControl(null),
    t2_player1_name: new FormControl(null),
    t1_player2_name: new FormControl(null),
    t2_player2_name: new FormControl(null),
    t1_player3_name: new FormControl(null),
    t2_player3_name: new FormControl(null),
    t1_player4_name: new FormControl(null),
    t2_player4_name: new FormControl(null),
    t1_player5_name: new FormControl(null),
    t2_player5_name: new FormControl(null),
    t1_player6_name: new FormControl(null),
    t2_player6_name: new FormControl(null),
    t1_player7_name: new FormControl(null),
    t2_player7_name: new FormControl(null),
    t1_player8_name: new FormControl(null),
    t2_player8_name: new FormControl(null),
    t1_player9_name: new FormControl(null),
    t2_player9_name: new FormControl(null),
    t1_player10_name: new FormControl(null),
    t2_player10_name: new FormControl(null),
    t1_player11_name: new FormControl(null),
    t2_player11_name: new FormControl(null),
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
      team1_score: new FormControl(null),
      team2_score: new FormControl(null),
      t1_player1_name: new FormControl(null),
      t2_player1_name: new FormControl(null),
      t1_player2_name: new FormControl(null),
      t2_player2_name: new FormControl(null),
      t1_player3_name: new FormControl(null),
      t2_player3_name: new FormControl(null),
      t1_player4_name: new FormControl(null),
      t2_player4_name: new FormControl(null),
      t1_player5_name: new FormControl(null),
      t2_player5_name: new FormControl(null),
      t1_player6_name: new FormControl(null),
      t2_player6_name: new FormControl(null),
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
      Game : 'Cricket',
      'Time of record entry': Date.now(),
      'Winning Team': data.winning_team,
      'Team 1 Score' : data.team1_score,
      'Team 2 Score' : data.team2_score,
      'Time Played': data.time_spent_playing,
      'Team 1 Name': data.team1_name,
      'Team 2 Name': data.team2_name,
      'Team 1 Player 1 Name': data.t1_player1_name,
      'Team 1 Player 2 Name': data.t1_player2_name,
      'Team 1 Player 3 Name': data.t1_player3_name,
      'Team 1 Player 4 Name': data.t1_player4_name,
      'Team 1 Player 5 Name': data.t1_player5_name,
      'Team 1 Player 6 Name': data.t1_player6_name,
      'Team 1 Player 7 Name': data.t1_player7_name,
      'Team 1 Player 8 Name': data.t1_player8_name,
      'Team 1 Player 9 Name': data.t1_player9_name,
      'Team 1 Player 10 Name': data.t1_player10_name,
      'Team 1 Player 11 Name': data.t1_player11_name,
      'Team 2 Player 1 Name': data.t2_player1_name,
      'Team 2 Player 2 Name': data.t2_player2_name,
      'Team 2 Player 3 Name': data.t2_player3_name,
      'Team 2 Player 4 Name': data.t2_player4_name,
      'Team 2 Player 5 Name': data.t2_player5_name,
      'Team 2 Player 6 Name': data.t2_player6_name,
      'Team 2 Player 7 Name': data.t2_player7_name,
      'Team 2 Player 8 Name': data.t2_player8_name,
      'Team 2 Player 9 Name': data.t2_player9_name,
      'Team 2 Player 10 Name': data.t2_player10_name,
      'Team 2 Player 11 Name': data.t2_player11_name,
    };
    await this.dataService.submitData(finalDoc);
    $('.toast').show().toast({delay: 3000}).toast('show');
    this.submitProgress = false;
    this.submitText = 'Submit';
    this.resetForm();
  }
}
