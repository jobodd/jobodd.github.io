import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  spells: any[] = [
    {
      'name': 'a spell name!',
      'v': true,
      's': true,
      'm': true,
      'level': "C",
      'castTime': 'Action',
      'isPrepared': false
    },
    {
      'name': 'A powerful spell!',
      'v': true,
      's': false,
      'm': false,
      'level': "1",
      'castTime': 'Action',
      'isPrepared': false
    }
  ]

}
