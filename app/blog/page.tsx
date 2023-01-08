import type { NextPage as NP } from "next";

export const generateStaticParams = () => {
  return [
    { slug: "learn-types" },
    { slug: "svelte-vs-react" },
    { slug: "hello-world" },
  ];
};

const BlogHomePage = ({ params }: { params: any }) => {
  return <div>Blog home page {JSON.stringify(params, null, 2)}</div>;
};

export default BlogHomePage;
