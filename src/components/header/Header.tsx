"use client";
import { Box, Container, Flex, Text, Center } from "@mantine/core";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  const menuItems = [
    { name: "About", link: "/about" },
    { name: "Work", link: "/work" },
    { name: "Blog", link: "/blog" },
    { name: "Download", link: "/download" },
    { name: "Contact", link: "/contact" },
    { name: "Link", link: "/link" },
  ];

  return (
    <header>
      <Box bg="#eee">
        <Container>
          <Center h="150px">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Text size="48px" fw="bold" c="#222">
                SOSHIDA
              </Text>
            </Link>
          </Center>

          <Flex gap="0 32px" justify="center" wrap="wrap">
            {menuItems.map((menuItem, menuItemId) => {
              return (
                <Link
                  key={menuItemId}
                  href={menuItem.link}
                  style={{
                    textDecoration: "none",
                    paddingBottom: "20px",
                  }}
                  className={
                    menuItem.link === pathname
                      ? styles.menuItem
                      : styles.menuItemHover
                  }
                >
                  <Text
                    size="md"
                    style={
                      menuItem.link === pathname
                        ? { borderBottom: "1px solid black" }
                        : {}
                    }
                  >
                    {menuItem.name}
                  </Text>
                </Link>
              );
            })}
          </Flex>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
