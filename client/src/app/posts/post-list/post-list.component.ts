import { Component, Input, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']

})

export class PostListComponent implements OnInit {
    /* posts = [
        { title: 'First Post', content: 'This is the 1st post'},
        {title: 'Second Post', content: 'This is the second post\'s content'},
        {title: 'Third Post', content: 'This is the third post\'s content'}
    ] */
    @Input() posts: Post[] = [];

    constructor(public postsService: PostsService) {}

    ngOnInit() {
        this.posts = this.postsService.getPosts();
    }
}