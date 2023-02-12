import { Post } from '@/models/post.model';
import PostsGrid from '../posts/PostsGrid';

type FeaturedPostsProps = {
  posts: Post[];
};

export default function FeaturedPosts({
  posts,
}: FeaturedPostsProps): JSX.Element {
  return (
    <section className="bg-slate-500 p-3">
      <div className="mx-auto max-w-4xl ">
        <PostsGrid posts={posts} />
      </div>
    </section>
  );
}
