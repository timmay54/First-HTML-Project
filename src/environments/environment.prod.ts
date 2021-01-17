// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//https://medium.com/@tolvaly.zs/how-to-version-number-angular-6-applications-4436c03a3bd3
// for versioning stuff

import { SnotifyPosition } from 'ng-snotify';

export const environment = {
  production: true,
  
  appVersion: require('../../package.json').version, // npm --no-git-tag-version version patch to increment
  appVerDateTime: '11/26/2020-09:00:00', // Automate the same way?

  // baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
  baseUrl : `https://timmay54.duckdns.org`,

  snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop,
    timeout: 5000,
    closeOnClick: true,
    newOnTop: true,
    pauseOnHover: true
  },
};
