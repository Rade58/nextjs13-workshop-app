import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const HeadForBlogHome: FC<Props> = () => {
  return (
    <>
      <title>Blog</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Bloh Home Page" />
    </>
  );
};

export default HeadForBlogHome;
