import { Box, Text, Title } from "@mantine/core";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Box pb="xl">
        <Title
          order={2}
          fw="normal"
          style={{ display: "inline-block", borderBottom: "1px solid black" }}
        >
          About
        </Title>
        <Box my="md">
          <Text size="lg">
            web開発、映像、クリエイティブコーディングに興味がある大学生。
          </Text>
        </Box>
      </Box>

      <Box my="xl" pb="xl">
        <Title
          order={2}
          fw="normal"
          style={{ display: "inline-block", borderBottom: "1px solid black" }}
        >
          web開発
        </Title>
        <Box my="md">
          <Text size="lg">
            フロントエンドのReact/Next.js、バックエンドのDjango REST
            Frameworkを勉強中。
          </Text>
        </Box>
      </Box>

      <Box my="xl" pb="xl">
        <Title
          order={2}
          fw="normal"
          style={{ display: "inline-block", borderBottom: "1px solid black" }}
        >
          映像
        </Title>
        <Box my="md">
          <Text size="lg">
            使用ソフトはAfter EffectsとBlender。Houdiniに興味あり。
          </Text>
        </Box>
      </Box>

      <Box my="xl" pb="xl">
        <Title
          order={2}
          fw="normal"
          style={{ display: "inline-block", borderBottom: "1px solid black" }}
        >
          クリエイティブコーディング
        </Title>
        <Box my="md">
          <Text size="lg">p5.jsでたまに遊びます。three.jsもそのうち。</Text>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
