import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {

  constructor() { }

  updateMeta(
    title: Title,
    meta: Meta,
    name: string,
    description: string,
    previewPath: string
  ): void {
    title.setTitle(name);
    meta.updateTag({ 
      name: 'description', 
      content: description 
    });
    meta.updateTag({ 
      property: 'og:type', 
      content: 'website' 
    });
    meta.updateTag({ 
      property: 'og:url', 
      content: window.location.href 
    });
    meta.updateTag({ 
      property: 'og:title', 
      content: name 
    });
    meta.updateTag({ 
      property: 'og:description', 
      content: description 
    });
    meta.updateTag({ 
      property: 'og:image', 
      content: previewPath 
    });
    meta.updateTag({ 
      name: 'twitter:card', 
      content: 'summary_large_image' 
    });
    meta.updateTag({ 
      name: 'twitter:url', 
      content: window.location.href 
    });
    meta.updateTag({ 
      name: 'twitter:title', 
      content: name 
    });
    meta.updateTag({ 
      name: 'twitter:description', 
      content: description 
    });
    meta.updateTag({ 
      name: 'twitter:image', 
      content: previewPath
    });
  }
  
}
