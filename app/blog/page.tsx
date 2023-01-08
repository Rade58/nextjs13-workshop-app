// YOU EXPORT THESE FROM HERE (AND THESE ARE GOING TO BE AVAILABLE INSIDE
// PAGES /blog:slug)
export const generateStaticParams = async () => {
  return [
    { slug: "learn-types" },
    { slug: "svelte-vs-react" },
    { slug: "hello-world" },
  ];
};

const BlogHomePage = () => {
  return <div>Blog home page</div>;
};

export default BlogHomePage;
