import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component'; // Import AppComponent

platformBrowserDynamic().bootstrapModule(AppComponent)
  .catch(err => console.error(err));
