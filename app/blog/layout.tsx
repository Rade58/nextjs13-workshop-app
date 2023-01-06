import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const LayoutForBlogHome: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      {/* <head>
        <title>Blog Post</title>
      </head> */}
      <body>{children}</body>
    </html>
  );
};

export default LayoutForBlogHome;
