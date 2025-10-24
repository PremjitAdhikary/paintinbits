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
import { AgentShotsAibohphobiaComponent } from './pages/agent-shots-aibohphobia/agent-shots-aibohphobia.component';
import { ImmortalKombatComponent } from './pages/immortal-kombat/immortal-kombat.component';
import { InnerBrahmaComponent } from './pages/inner-brahma/inner-brahma.component';
import { TheKnotComponent } from './pages/the-knot/the-knot.component';
import { ElfAndTheRobotComponent } from './pages/elf-and-the-robot/elf-and-the-robot.component';
import { MakingStoriesComponent } from './pages/making-stories/making-stories.component';
import { NoSuchPageComponent } from './pages/no-such-page/no-such-page.component';
import { ArticlePublishedComponent } from './pages/article-published/article-published.component';
import { AgentShotsPatienceComponent } from './pages/agent-shots-patience/agent-shots-patience.component';
import { AllWallpapersComponent } from './pages/all-wallpapers/all-wallpapers.component';
import { ProjectPanelPrintComponent } from './pages/project-panel-print/project-panel-print.component';
import { AwesomeAssamConventionComponent } from './pages/awesome-assam-convention/awesome-assam-convention.component';
import { AftermathComponent } from './pages/aftermath/aftermath.component';


const routes: Routes = [
  { path: 'article-list', component: ArticleListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'published', component: ArticlePublishedComponent },
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
  { path: 'articles/agent-shots-aibohphobia', component: AgentShotsAibohphobiaComponent },
  { path: 'articles/immortal-kombat', component: ImmortalKombatComponent },
  { path: 'articles/inner-brahma', component: InnerBrahmaComponent },
  { path: 'articles/the-knot', component: TheKnotComponent },
  { path: 'articles/elf-and-the-robot', component: ElfAndTheRobotComponent },
  { path: 'articles/making-stories', component: MakingStoriesComponent },
  { path: 'articles/agent-shots-patience', component: AgentShotsPatienceComponent },
  { path: 'articles/all-wallpapers', component: AllWallpapersComponent },
  { path: 'articles/project-panel-print', component: ProjectPanelPrintComponent },
  { path: 'articles/awesome-assam-convention', component: AwesomeAssamConventionComponent },
  { path: 'articles/aftermath', component: AftermathComponent },
  { path: '', redirectTo: 'article-list', pathMatch: 'full' }, 
  { path: '**', pathMatch: 'full', component: NoSuchPageComponent }
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
  ArtOfVs50Component, AgentShotsAibohphobiaComponent, ImmortalKombatComponent, 
  InnerBrahmaComponent, TheKnotComponent, ElfAndTheRobotComponent, MakingStoriesComponent, 
  NoSuchPageComponent, ArticlePublishedComponent, AgentShotsPatienceComponent, 
  AllWallpapersComponent, ProjectPanelPrintComponent, AwesomeAssamConventionComponent, 
  AftermathComponent
]
