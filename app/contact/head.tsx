/* eslint jsx-a11y/anchor-is-valid: 1 */
import React from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const HeadForContact: FC<Props> = () => {
  return (
    <>
      <title>Contact page</title>
    </>
  );
};

export default HeadForContact;
