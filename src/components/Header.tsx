import { Flex, Text, Box, Link, Spacer, Button  } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      width="100%"
      as="header"
      h="20"
      mx="auto"
      maxWidth={1480}
      align="center"
      px="6"
         
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight"  textColor="#44D361" w="64"> GE </Text>
      <Box as="nav" p="50"  >
      <Link fontSize="xl" mr={20} _hover={{color: '#8257E5'}} href="/" >Home </Link>
      <Link fontSize="xl"  mr={20} _hover={{color: '#8257E5'}} href="/">About me </Link>
      <Link fontSize="xl"   mr={20} _hover={{color: '#8257E5'}} href="/">Portfolio </Link>
      <Link fontSize="xl"  mr={20} _hover={{color: '#8257E5'}} href="/">Contact </Link>
      </Box>
    </Flex>
  );
}
