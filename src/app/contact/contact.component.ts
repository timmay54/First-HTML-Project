import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService, ToastDefaults } from '../../../node_modules/ng-snotify';
import { environment } from '../../environments/environment';

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

  contact(data) {
    this.snotify.setDefaults(ToastDefaults);
    this.snotify.async('Loading...', null);
    // tslint:disable-next-line: no-shadowed-variable
    this.profile.contactus(this.model).subscribe(data => {
      console.log(data.status + 'BLEEEBLAH');
      if (data.status === 200) {
        this.snotify.success(data.message, 'Success', this.snotifyConfig);
      } else {
        this.snotify.warning(data.message, 'Warning', this.snotifyConfig);
      }
    }, err => {
      this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig);
    });
  }

}
