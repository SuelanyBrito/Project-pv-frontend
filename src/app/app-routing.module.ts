import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';
import { VerseDayComponent } from './pages/verse-day/verse-day.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'themes', component: ThemesComponent },
  { path: 'videos', component: VideosPageComponent },
  { path: 'verse', component: VerseDayComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
