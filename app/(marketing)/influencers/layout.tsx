/* eslint jsx-a11y/anchor-is-valid: 1 */
import React from "react";
import type { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const LayoutForMarketingInfluencers: FC<Props> = ({ children }) => {
  // SINCE WE USE GROUPING, THIS LAYOUT WON'T INHERIT
  // "ANCESTOR" LAYOUT/S

  return (
    <div>
      <h2>Marketing influencers layout</h2>
      {children}
    </div>
  );
};

export default LayoutForMarketingInfluencers;
