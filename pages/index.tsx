import Head from 'next/head';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import Hero from '@/components/home/Hero';
import { Post } from '@/models/post.model';
import getSortedPostData from '@/lib/posts';

export async function getStaticProps(): Promise<{
  props: {
    allPostsData: Post[];
  };
}> {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    },
  };
}

type HomePageProps = {
  allPostsData: Post[];
};

export default function HomePage({ allPostsData }: HomePageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Udemy Final Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts posts={allPostsData} />
    </>
  );
}
