import type { NextPage as NP } from "next";
import { useRouter } from "next/router";

/* export const generateStaticParams = () => {
  return [
    { slug: "learn-types" },
    { slug: "svelte-vs-react" },
    { slug: "hello-world" },
  ];
}; */

const BlogPostPage = async ({ params }: { params: any }) => {
  console.log({ params });

  return <div>Blog Post Page {JSON.stringify(params, null, 2)}</div>;
};

export default BlogPostPage;
