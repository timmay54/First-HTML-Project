// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { SnotifyPosition } from 'ng-snotify';

export const environment = {
  production: false,
  //appVersion: '1.0.3-Dev',
  appVersion: require('../../package.json').version + '-dev',
  appVerDateTime: '1/17/2020-17:45:00',
  
  // baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
  baseUrl : `http://192.168.1.43:8090`,

  snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop,
    timeout: 5000,
    closeOnClick: true,
    newOnTop: true,
    pauseOnHover: true
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
