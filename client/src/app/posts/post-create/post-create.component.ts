import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})
export class  PostCreateComponent {
    enteredValue = '';
    NewPost = '';

    onAddPost() {
        /*    arg: postInput: HTMLTextAreaElement 
        console.log(postInput);
        console.dir(postInput);
        this.NewPost = postInput.value;
        alert('post added!'); */
        this.NewPost = this.enteredValue;
    }
}