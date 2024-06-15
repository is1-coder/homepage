import Link from "next/link";
import React from "react";
import { jost } from "@/utils/fonts";
import { headerItems } from "./headerItems";
import ActiveLink from "@/components/ActiveLink/ActiveLink";

const Header = () => {
  const headerHeight = "150px";

  return (
    <div style={{ height: headerHeight }}>
      <header
        className={jost.className}
        style={{
          height: headerHeight,
          width: "100%",
          position: "fixed",
          top: 0,
          backgroundColor: "#eee",
          zIndex: 1000,
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
              gap: "20px",
            }}
          >
            {headerItems.map((item, index) => {
              return (
                <ActiveLink
                  key={index}
                  className="hoverOpacity"
                  href={item.link}
                  style={{
                    color: "#222",
                    textDecoration: "none",
                    paddingBottom: "2px",
                  }}
                  activeStyle={{
                    borderBottom: "1px solid black",
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
    </div>
  );
};

export default Header;
