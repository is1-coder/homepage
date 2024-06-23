import Link from "next/link";
import React from "react";
import { headerItems } from "./headerItems";
import ActiveLink from "@/components/ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="h-[--header-height]">
      <header className="h-[--header-height] w-screen fixed top-0 z-40 font-jost bg-[--bg-color-2]">
        <div className="h-full container mx-auto flex items-center justify-start">
          {/* ロゴ */}
          <Link href="/" className="text-[40px] font-[600] tracking-[1px]">
            SOSHIDA
          </Link>

          {/* ナビゲーション */}
          <nav className="h-full ml-10 flex justify-center gap-6">
            {headerItems.map((item, index) => {
              return (
                <ActiveLink
                  key={index}
                  href={item.link}
                  className="leading-[--header-height] text-lg font-[500] opacity-50 hover:opacity-[1]"
                  activeClassName="opacity-100"
                >
                  {item.name}
                </ActiveLink>
              );
            })}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
