import Link from "next/link";
import React from "react";
import { jost } from "@/utils/fonts";
import { headerItems } from "./headerItems";
import ActiveLink from "@/components/ActiveLink/ActiveLink";

const Header = () => {
  return (
    <header
      className={jost.className}
      style={{
        height: "200px",
        width: "100%",
        position: "fixed",
        top: 0,
        backgroundColor: "#eee",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* headerロゴ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <p
              style={{
                fontSize: "48px",
                fontWeight: "500",
                color: "#222",
                letterSpacing: "1px",
              }}
            >
              SOSHIDA
            </p>
          </Link>
        </div>

        {/* headerアイテム */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {headerItems.map((item, index) => {
            return (
              <ActiveLink
                key={index}
                className="hoverOpacity"
                href={item.link}
                style={{ color: "#222", textDecoration: "none" }}
                activeStyle={{
                  borderBottom: "1px solid black",
                  paddingBottom: "4px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                >
                  {item.name}
                </p>
              </ActiveLink>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
