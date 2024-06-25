import Link from "next/link";
import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";

type SocialLinkProps = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

const SocialLink = ({ name, url, icon }: SocialLinkProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex items-center pb-1 border-b-[1px] border-transparent hover:border-black"
    >
      {icon}
      <h2 className="mx-2">{name}</h2>
      <RxOpenInNewWindow size="20px" />
    </Link>
  );
};

export default SocialLink;
