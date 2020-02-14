import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <html>
      <div>
        <p>
          square works!
        </p>
      </div>
    </html>
  ` ,
  styles: []
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
