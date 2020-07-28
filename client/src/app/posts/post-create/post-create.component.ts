import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.scss']
})
export class  PostCreateComponent {
    enteredTitle = '';
    enteredContent = '';
    // NewPost = '';
    postCreated = new EventEmitter();

    onAddPost() {
        /*    arg: postInput: HTMLTextAreaElement
        console.log(postInput);
        console.dir(postInput);
        this.NewPost = postInput.value;
        alert('post added!'); */
        const post = {
            title: this.enteredTitle,
            content: this.enteredContent
        };
        // this.NewPost = this.enteredValue;
        this.postCreated.emit(post);
    }
}