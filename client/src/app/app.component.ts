import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Teaching';

  posts = [];

  onPostAdded(post){
    this.posts.push(post);
  }

}
