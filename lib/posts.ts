import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/models/post.model';

const postsDirectory = path.join(process.cwd(), 'posts');

export default function getSortedPostData(): Post[] {
  const filesNames = fs.readdirSync(postsDirectory);
  const allPostsData = filesNames.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const fullpath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullpath, 'utf-8');
    const matterResult = matter(fileContents);
    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      image: matterResult.data.image,
      isFeatured: matterResult.data.isFeatured,
      excerpt: matterResult.data.excerpt,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export function getAllSlugs(): {
  params: {
    slug: string;
  };
}[] {
  const filesNames = fs.readdirSync(postsDirectory);
  const allSlugs = filesNames.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return allSlugs;
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the post metadata and content
  const matterResult = matter(fileContents);
  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    image: matterResult.data.image,
    isFeatured: matterResult.data.isFeatured,
    excerpt: matterResult.data.excerpt,
    contentHtml: matterResult.content,
  };
}
