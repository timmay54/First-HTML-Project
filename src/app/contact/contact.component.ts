import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService, ToastDefaults } from '../../../node_modules/ng-snotify';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  snotifyConfig = environment.snotifyConfig;
  model: any = {};

  constructor(
    private profile: ProfileService,
    private snotify: SnotifyService
  ) { }

  ngOnInit() {
  }
  // https://medium.com/@balramchavan/using-async-await-feature-in-angular-587dd56fdc77
  // trying to build a better snotify
  // Try swapping if statement with setTimeout?
  promiseTwo(data){
    this.snotify.async('Please wait...', "Loading...",
      new Promise((resolve, reject) => {
        this.profile.contactus(this.model).toPromise().then(
          res => {
            //success
            console.log(data);
            resolve({
              title: "Success",
              body: "Data has successfully pinged the Backend!",
              config: this.snotifyConfig
            });
          },
          msg => { 
            //err
            reject({
              title: "Error",
              body: "Error: Server is under maitenance for more projects. Please try again!",
              config: this.snotifyConfig
            });
          }
        );
      }),
    this.snotifyConfig
    )
  }

  // USING THIS, NOT THE CONTACT - DATA MIGHT NOT BE SENT SINCE THE FORM IS NOT PASSED IN
  promise(data){
    this.snotify.async('Please wait...', "Loading...",
      new Promise((resolve, reject) => {
        this.profile.contactus(this.model).subscribe(data => {
          setTimeout(() => {
            if(data.status === 200){
              console.log(data);
              resolve({
                title: "Success",
                body: "Data has successfully pinged the Backend!",
                config: this.snotifyConfig
              });
            }
          },5550)
        });
        setTimeout(() => { 
          reject({
            title: "Error",
            body: "Error: Server is under maitenance for more projects. Please try again!",
            config: this.snotifyConfig
          });
        }, 5000);
      })
    ),
    this.snotifyConfig
  }

  // Not using this method anymore, probably should implement old method for documentation
  contact(data) {
    this.snotify.setDefaults(ToastDefaults);

    const successAction = new Observable(observer => {
      setTimeout(() => {
        observer.next({
          body: 'Still loading.....',
        });
      }, 2000);

      setTimeout(() => {
        observer.next({
          title: 'Success',
          body: 'Data has been sent to my Backend!',
          config: {
            closeOnClick: true,
            timeout: 5000,
            showProgressBar: true
          }
        });
        observer.complete();
      }, 5000);
    });
    const errorAction = new Observable(observer => {
      setTimeout(() => {
        observer.error({
          title: 'Error',
          body: 'Example. Error 404. Service not found',
        });
      }, 2000);
    });

    this.profile.contactus(this.model).subscribe(data => {
      this.snotify.async(
        'Loading...', 
        "Wait", 
        new Promise((resolve, reject) => {
          if (data.status === 200){
            return resolve({
                title: "Success",
                body: "Data has successfully pinged the Backend!",
                config: this.snotifyConfig
              });
            }
          else{
            return reject({
              title: "Error",
              body: "Error: Server is under maitenance for more projects. Please try again!",
              config: this.snotifyConfig
            });
          }
        }),
        this.snotifyConfig
      );
    }, 
    err => {
      this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig);
      console.log(err);
    });
  }
}

/* OOOOHHHH this.snotify.clear();!!!!!!!!! 

This could be reverted back to the original settings, snotify.Clear() could then remove the duplicates or timing could fix it.

if (data.status === 200) {
        // this.snotify.success(data.message, 'Success', this.snotifyConfig);
        this.snotify.async(data.message, successAction);
      } 
      else {
        // this.snotify.warning(data.message, 'Warning', this.snotifyConfig);
        this.snotify.async(data.message, errorAction);
      }
*/
