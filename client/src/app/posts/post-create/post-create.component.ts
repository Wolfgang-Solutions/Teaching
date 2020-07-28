import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})
export class  PostCreateComponent {
    NewPost = '';

    onAddPost() {
        this.NewPost = 'The user\'s post';
       // alert('post added!');
    }
}