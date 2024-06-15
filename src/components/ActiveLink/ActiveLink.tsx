"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type ActiveLinkProps = React.ComponentProps<typeof Link> & {
  activeStyle: React.CSSProperties;
};

const ActiveLink = ({ activeStyle, ...props }: ActiveLinkProps) => {
  const pathname = usePathname();
  console.log(pathname);

  return pathname.includes(`${props.href}`) ? (
    <Link {...props} style={{ ...props.style, ...activeStyle }}>
      {props.children}
    </Link>
  ) : (
    <Link {...props} style={props.style}>
      {props.children}
    </Link>
  );
};

export default ActiveLink;
