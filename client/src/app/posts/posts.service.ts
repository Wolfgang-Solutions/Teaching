import { Post } from './post.model';

export class PostsService {
    private posts: Post[] = [];

    getPosts() {
        return [...this.posts]; // to copy elements from old array
    }

    addPosts(title: string, content: string) {
        const post: Post = {title: title, content: content};
        this.posts.push(post);
    }
}
