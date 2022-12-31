import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack height={"100vh"}>
      <Flex gap={"sm"} justify={"center"}>
        <Image
          src="/logo.svg"
          alt="DevArk Solutions Logo"
          width={"3xs"}
          mt="2"
        />
      </Flex>
      <Flex height={"full"}>
        <Box textAlign={"center"} m="auto">
          <Heading size={"2xl"} mb="2">
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
    </Stack>
  );
}
