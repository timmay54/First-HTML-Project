// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { SnotifyPosition } from 'ng-snotify';

export const environment = {
  production: true,
  appVersion: '1.0.3',
  appVerDateTime: '11/26/2020-00:00:00',

  // baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
  baseUrl : `https://timmay54.duckdns.org`,

  snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop
  },
};
