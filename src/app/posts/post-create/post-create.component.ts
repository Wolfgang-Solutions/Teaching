import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})
export class PostCreateComponent
 {
    enteredValue = '';
    NewPost = 'NO CONTENT';
    onAddPost(){
        // console.log(postInput);
        alert('Post Added');
        // this.NewPost = 'User\'s post';
        this.NewPost = this.enteredValue;
    }
}