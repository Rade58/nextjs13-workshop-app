import type { NextPage as NP } from "next";
import { useRouter } from "next/router";

export const generateStaticParams = async () => {
  return [
    { slug: "learn-types" },
    { slug: "svelte-vs-react" },
    { slug: "hello-world" },
  ];
};

const getdataFromCms = async (slug: string) => {
  // IT WOULD GO SOMETHING LIKE THIS
  // await fetch(slug)
  const res = await fetch("https://reddit.com/.json");
  return res.json();
};

const BlogPostPage = async ({ params }: { params: any }) => {
  const data = await getdataFromCms(params.slug);

  return <div>Blog Post Page {JSON.stringify(data.kind, null, 2)}</div>;
};

export default BlogPostPage;
