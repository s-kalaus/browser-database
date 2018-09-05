import {BrowserDatabase} from './class';

declare var window: any;

window.browserDatabase = new BrowserDatabase(window.BROWSER_DATABASE_OPTIONS || {});
