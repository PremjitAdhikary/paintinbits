import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from'@angular/common/http';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollapsibleSectionComponent } from './shared/ui-components/collapsible-section/collapsible-section.component';
import { ArticleHeaderComponent } from './shared/ui-components/article-header/article-header.component';
import { ImageHolderComponent } from './shared/ui-components/image-holder/image-holder.component';
import { CarouselComponent } from './shared/ui-components/carousel/carousel.component';

import { ArticlesService } from './shared/services/articles.service';
import { ImageLocationService } from './shared/services/image-location.service';
import { ArtOfVs50Component } from './pages/art-of-vs50/art-of-vs50.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CollapsibleSectionComponent,
    ArticleHeaderComponent,
    ImageHolderComponent,
    CarouselComponent,
    ArtOfVs50Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticlesService, ImageLocationService, 
  {
    provide: APP_BASE_HREF,
    useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
    deps: [PlatformLocation]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
