import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <main
        style={{
          height: "100vh",
          background:
            "linear-gradient(183.15deg, rgba(166, 180, 200, 0.7) -7.37%, rgba(255, 255, 255, 0) 75.6%",
        }}
      >
        <Flex gap={"sm"} justify={"center"}>
          <Image
            src="/logo.svg"
            alt="DevArk Solutions Logo"
            width={"3xs"}
            mt="2"
          />
        </Flex>
        <Flex height={"full"} align="center" justify={"center"}>
          <Box textAlign={"center"}>
            <Heading size={"4xl"} mb="2">
              Coming Soon
            </Heading>
            <Text mb="2">
              If you would like to get in contact, please use the email below.
            </Text>
            <Link color={"teal.500"} href="mailto:contact@devarksolutions.com">
              contact@devarksolutions.com
            </Link>
          </Box>
        </Flex>
      </main>
    </>
  );
}
