import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { AboutComponent } from './pages/about/about.component';
import { WhiteboardComponent } from './pages/whiteboard/whiteboard.component';
import { ProjectSkinComponent } from './pages/project-skin/project-skin.component';
import { LandscapesComponent } from './pages/landscapes/landscapes.component';
import { MoodsComponent } from './pages/moods/moods.component';
import { RaiseTheDeadComponent } from './pages/raise-the-dead/raise-the-dead.component';
import { AvatarsComponent } from './pages/avatars/avatars.component';
import { FirstDigitalComicComponent } from './pages/first-digital-comic/first-digital-comic.component';
import { ProjectEtchComponent } from './pages/project-etch/project-etch.component';
import { SecondDigitalComicComponent } from './pages/second-digital-comic/second-digital-comic.component';
import { ThirdDigitalComicComponent } from './pages/third-digital-comic/third-digital-comic.component';
import { DoodlesComponent } from './pages/doodles/doodles.component';
import { AnAgentComponent } from './pages/an-agent/an-agent.component';
import { ADiwaliMissionComponent } from './pages/a-diwali-mission/a-diwali-mission.component';
import { ArtOfVs50Component } from './pages/art-of-vs50/art-of-vs50.component';


const routes: Routes = [
  { path: 'article-list', component: ArticleListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'articles/whiteboard', component: WhiteboardComponent },
  { path: 'articles/project-skin', component: ProjectSkinComponent },
  { path: 'articles/landscapes', component: LandscapesComponent },
  { path: 'articles/moods', component: MoodsComponent },
  { path: 'articles/raise-the-dead', component: RaiseTheDeadComponent },
  { path: 'articles/avatars', component: AvatarsComponent },
  { path: 'articles/first-digital-comic', component: FirstDigitalComicComponent },
  { path: 'articles/project-etch', component: ProjectEtchComponent },
  { path: 'articles/second-digital-comic', component: SecondDigitalComicComponent },
  { path: 'articles/third-digital-comic', component: ThirdDigitalComicComponent },
  { path: 'articles/doodles', component: DoodlesComponent },
  { path: 'articles/an-agent', component: AnAgentComponent },
  { path: 'articles/a-diwali-mission', component: ADiwaliMissionComponent },
  { path: 'articles/art-of-vs50', component: ArtOfVs50Component },
  { path: '', redirectTo: 'article-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ArticleListComponent, AboutComponent, WhiteboardComponent, ProjectSkinComponent, 
  LandscapesComponent, MoodsComponent, RaiseTheDeadComponent, AvatarsComponent, 
  FirstDigitalComicComponent, ProjectEtchComponent, SecondDigitalComicComponent, 
  ThirdDigitalComicComponent, DoodlesComponent, AnAgentComponent, ADiwaliMissionComponent, 
  ArtOfVs50Component
]
