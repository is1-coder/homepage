"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type ActiveLinkProps = React.ComponentProps<typeof Link> & {
  activeClassName: string;
};

const ActiveLink = ({ activeClassName, ...props }: ActiveLinkProps) => {
  const pathname = usePathname();

  return pathname.includes(`${props.href}`) ? (
    <Link {...props} className={`${props.className} ${activeClassName}`}>
      {props.children}
    </Link>
  ) : (
    <Link {...props} className={`${props.className}`}>
      {props.children}
    </Link>
  );
};

export default ActiveLink;
