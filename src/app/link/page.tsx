import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import SocialLink from "@/features/link/SocialLink";

const LinkPage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <SocialLink
        name={"GitHub"}
        url={"https://github.com/is1-coder"}
        icon={<AiFillGithub size="40px" />}
      />

      <SocialLink
        name={"Atcoder"}
        url={"https://atcoder.jp/users/is1"}
        icon={
          <Image
            src="/images/link/logo_atcoder.png"
            alt={"logo_atcoder"}
            height={40}
            width={40}
            className="pointer-events-none select-none"
          />
        }
      />
    </div>
  );
};

export default LinkPage;
