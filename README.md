# Paintinbits

For Art.

## To add article

  - Add article component under 'pages'
  - Add article service under 'pages/services'
  - add to imports in app-routing.module.ts. Add route for the page
  - remove all imports and @ngModule entries from app.module.ts
  - add all the image locations in image service
  - update articles.json

## Image Specs

desktop: 800-950px wide by 650px high
tab: 650px wide 500px high
mobile: 350px wide and high
thumbnail: 100px high

## Commands

To run local server:
ng s -o

Component addition:
ng g c <component-name>
ng g c <folder-name>/<component-name>

Service addition:
ng g s <service-name>
ng g s <folder-name>/<service-name>

Build:
ng build --prod --output-path docs --base-href /paintinbits/
