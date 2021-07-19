import { Component, OnInit } from '@angular/core';
import { Providers } from '@microsoft/mgt-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mgt-jest-test';

  ngOnInit(): void {
    console.log(Providers?.globalProvider?.state);
  }
}
