import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.scss']
})
export class  PostCreateComponent {
    enteredTitle = '';
    enteredContent = '';
    // NewPost = '';

    onAddPost() {
        /*    arg: postInput: HTMLTextAreaElement
        console.log(postInput);
        console.dir(postInput);
        this.NewPost = postInput.value;
        alert('post added!'); */
        // this.NewPost = this.enteredValue;
    }
}