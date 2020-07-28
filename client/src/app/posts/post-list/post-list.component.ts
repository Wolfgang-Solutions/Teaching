import { Component } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']

})

export class PostListComponent {
    posts = [
        { title: 'First Post', content: 'This is the 1st post'},
        {title: 'Second Post', content: 'This is the second post\'s content'},
        {title: 'Third Post', content: 'This is the third post\'s content'}
    ]
}