import { Post } from '@/models/post.model';
import PostItem from './PostItem';

type PostsGridProps = {
  posts: Post[];
};

export default function PostsGrid({ posts }: PostsGridProps): JSX.Element {
  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {posts?.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
