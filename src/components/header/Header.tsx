import { Box, Container, Flex, Text, Center } from "@mantine/core";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const links = [
    { name: "About", link: "/about" },
    { name: "Work", link: "/work" },
    { name: "Blog", link: "/blog" },
    { name: "Download", link: "/download" },
    { name: "Contact", link: "/contact" },
    { name: "Link", link: "/link" },
  ];

  return (
    <header>
      <Box h="200px" bg="#eee">
        <Container>
          <Center h="150px">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Text size="48px" fw="bold" c="#222">
                SOSHIDA
              </Text>
            </Link>
          </Center>

          <Flex gap="xl" justify="center" h="50px">
            {links.map((link, linkId) => {
              return (
                <Link
                  key={`link-${linkId}`}
                  href={link.link}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                  className={styles.textHover}
                >
                  <Text size="md">{link.name}</Text>
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
