import Head from "next/head";
import {PostCard, Categories, PostWidget} from "../components";
import {getPosts} from "../services";
import {FeaturedPosts} from "../sections";

// flex  justify-between
// container mx-auto px-10 mb-8
// grid grid-cols-1 lg:grid-cols-12 gap-12
// lg:col-span-4 col-span-1 flex flex-col lg:flex-row w-full justify-center gap-7
export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>BOB Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="flex flex-col lg:flex-row w-full justify-center gap-3">
        <div className=" grid grid-cols-1  gap-12 p-4 m-5">
          <div className="lg:col-span-8 col-span-1">
            {posts
              .map((post) => <PostCard post={post.node} key={post.title} />)
              .reverse()}
          </div>
        </div>
        <div className=" lg:col-span-4 col-span-1 max-w-6xl ">
          <div className="lg:sticky relative top-8 flex flex-col  rounded-lg ">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts},
  };
}
