import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

export const APP_ROUTES: Routes = [
  {path: 'login', component: UserProfileComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
