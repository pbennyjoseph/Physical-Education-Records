import {HomeComponent} from './home-component/home.component';
import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from '../auth.guard';
import {ReportsComponent} from './reports/reports.component';
import {AboutComponent} from './about/about.component';
import {AddEntryComponent} from './add-entry/add-entry.component';
import {VolleyballComponent} from './volleyball/volleyball.component';
import {CricketComponent} from './cricket/cricket.component';
import {TabletennisComponent} from './tabletennis/tabletennis.component';
import {ChessComponent} from './chess/chess.component';
import {BasketballComponent} from './basketball/basketball.component';
import {CarromComponent} from './carrom/carrom.component';
import {BadmintonComponent} from './badminton/badminton.component';

export const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'reports',
        component: ReportsComponent,
        canActivate: [AuthGuard],
      },

      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'add-entry/:gameid',
        component: AddEntryComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'volleyball',
        component: VolleyballComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'cricket',
        component: CricketComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'tabletennis',
        component: TabletennisComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'chess',
        component: ChessComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'basketball',
        component: BasketballComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'carrom',
        component: CarromComponent,
        canActivate: [AuthGuard],
      }, {
        path: 'badminton',
        component: BadmintonComponent,
        canActivate: [AuthGuard],
      },

    ]
  }
];
