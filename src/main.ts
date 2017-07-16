import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './polyfills';
import { AppModule } from './components/app/app.module';
import './getFBSDK';

platformBrowserDynamic().bootstrapModule(AppModule);
