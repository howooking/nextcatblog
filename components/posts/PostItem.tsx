import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/models/post.model';

type PostItemProps = {
  post: Post;
};

export default function PostItem({ post }: PostItemProps): JSX.Element {
  const { title, image, excerpt, date, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <li className="rounded-xl bg-gray-200 p-2 shadow-2xl hover:-translate-y-1">
      <Link href={`/posts/${slug}`}>
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={title}
            fill
            className=" object-cover"
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
        <div>
          <h3 className="text-center text-2xl font-bold">{title}</h3>
          <p className="text-center text-gray-600">{formattedDate}</p>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
