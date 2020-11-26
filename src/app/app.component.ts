import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from '../../node_modules/ngx-spinner';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Timothy-Mardesen-Portfolio';
  AppVersion = environment.appVersion;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    },
    2000);
  }
  // stuff = `Angular ${VERSION.full} stuff`;
  // int lsl = 5;
}
