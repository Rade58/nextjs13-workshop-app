"use client";
import type { FC, ReactNode } from "react";
import HeaderLink from "./HeaderLink";

interface Props {
  children?: ReactNode;
}

const Header: FC<Props> = () => {
  return (
    <header>
      logo
      <div>
        <HeaderLink />
      </div>
    </header>
  );
};

export default Header;
