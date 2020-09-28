import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home-component/home.component';
import { ReportsComponent } from './home/reports/reports.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AboutComponent } from './home/about/about.component';
import { AddEntryComponent } from './home/add-entry/add-entry.component';
import { VolleyballComponent } from './home/volleyball/volleyball.component';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import { CarromComponent } from './home/carrom/carrom.component';
import { CricketComponent } from './home/cricket/cricket.component';
import { ChessComponent } from './home/chess/chess.component';
import { TabletennisComponent } from './home/tabletennis/tabletennis.component';
import { BasketballComponent } from './home/basketball/basketball.component';
import { BadmintonComponent } from './home/badminton/badminton.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HomeComponent,
    ReportsComponent,
    DashboardComponent,
    AboutComponent,
    AddEntryComponent,
    VolleyballComponent,
    CarromComponent,
    CricketComponent,
    ChessComponent,
    TabletennisComponent,
    BasketballComponent,
    BadmintonComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
