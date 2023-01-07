/* eslint jsx-a11y/anchor-is-valid: 1 */
import React from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const LayoutForContact: FC<Props> = ({ children }) => {
  return (
    <div>
      Contact layout
      {children}
    </div>
  );
};

export default LayoutForContact;
