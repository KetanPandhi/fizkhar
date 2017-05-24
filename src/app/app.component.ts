import { FizSevice } from './services/fiz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private fizService: FizSevice) {

  }
  onClick() {
    this.fizService.getIt().subscribe((data) => {
      this.title = data;
    });
  }
}
