"use client";

const ErrorBlogPost = ({ error }: { error: Error }) => {
  console.log(error);

  return <div>oooooops 👾 {error.message}!</div>;
};

export default ErrorBlogPost;
