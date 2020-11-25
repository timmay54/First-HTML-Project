// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { SnotifyPosition } from 'ng-snotify';

export const environment = {
  production: true,

  // baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
  baseUrl : `http://timmay54.onthewifi.com:7711`,

  snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop
  },
};
