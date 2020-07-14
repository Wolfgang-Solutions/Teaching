import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
    NewPost = 'NO CONTENT';
    onAddPost() {
        alert('Post Added');
        this.NewPost = 'User\'s post';
    }
}