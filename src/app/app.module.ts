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
import { FilteredArticlesComponent } from './shared/ui-components/filtered-articles/filtered-articles.component';

import { ArticlesService } from './shared/services/articles.service';
import { ImageLocationService } from './shared/services/image-location.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CollapsibleSectionComponent,
    ArticleHeaderComponent,
    ImageHolderComponent,
    CarouselComponent,
    FilteredArticlesComponent
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
