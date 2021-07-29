# Paintinbits

For Art. [Check it Out](https://premjitadhikary.github.io/paintinbits/article-list)

## To add article

  - Add article component under 'pages'
  - Add article service under 'pages/services'
  - add to imports in app-routing.module.ts. Add route for the page
  - remove all imports and @ngModule entries from app.module.ts
  - add all the image locations in image service
  - update articles.json

## Image Specs

  - hi: 1400 px wide
  - lo: 800px wide
  - thumbnail: 100px high

## Commands

To run local server:
```sh
ng s -o
```

Component addition:
```sh
ng g c <component-name>
ng g c <folder-name>/<component-name>
```

Service addition:
```sh
ng g s <service-name>
ng g s <folder-name>/<service-name>
```

Directive addition:
```sh
ng g directive <name>
```

Build:
```sh
ng build --prod --output-path docs --base-href "https://premjitadhikary.github.io/paintinbits/"
```
Copy index.html in docs folder and rename to 404.html.

Social Check:

https://cards-dev.twitter.com/validator

https://developers.facebook.com/tools/debug
