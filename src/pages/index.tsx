import { Header } from "../components/Header";
import Image from "next/image";
import avatar from "../assets/avatar.svg";
import {
  Flex,
  Text,
  Button,
  Box,
  Circle,
  Grid,
  VStack,
  GridItem,
  Spacer,
  color,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <Flex
        as="section"
        width="100vw"
        height="90vh"
        maxWidth={1480}
        mx="auto"
        display="flex"
        direction="row"
        align="center"
        justifyContent="center"
      >
        <Box width={600}>
          <Text fontSize="4xl" fontWeight="bold" p={2}>
            Hello
          </Text>
          <Text fontSize="3xl" fontWeight="bold" p={2}>
            I AM GUILHERME ECKERT
          </Text>
          <Text p={2}>
            lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Architecto perferendis aliquam
            asperiores aspernatur reprehenderit, doloremque quis aliquid velit
            atque ratione quas? Vitae minima, velit laboriosam impedit sequi
            architecto repudiandae exercitationem?
          </Text>

          <Box as="button" bg="#8257E5" p={6} w={250} _hover={{bg: "#6846b7"}} border={40} fontWeight="bold" fontSize="xl"> Contact me</Box>
        </Box>

        <Box width={632} height={656} align="center">
          <Circle size={600} color="white">
            <VStack spacing={50} position="absolute" ml={-520}>
              <Circle
                size={70}
                bg="black"
                position="relative"
                color="#44D361"
                fontSize="2xl"
                fontWeight="bold"
              >
                {"</>"}
              </Circle>
              <Circle
                size={70}
                bg="black"
                position="relative"
                color="#44D361"
                fontSize="2xl"
                fontWeight="bold"
              >
                JS
              </Circle>
            </VStack>

            <Circle
              size={500}
              border="35px solid #44D361"
              style={{ boxShadow: "0 0 60px #03D361" }}
            >
              <Image width="360" src={avatar} alt="avatar" />
            </Circle>
            <Circle
              size={70}
              bg="black"
              position="absolute"
              ml={530}
              color="#44D361"
              fontSize="xl"
              fontWeight="bold"
            >
              CSS
            </Circle>

            <Circle
              size={70}
              bg="black"
              position="absolute"
              mt={-500}
              ml={150}
              color="#44D361"
              fontSize="xl"
              fontWeight="bold"
            >
              Node
            </Circle>
            <Circle
              size={70}
              bg="black"
              position="absolute"
              mt={-350}
              ml={-410}
              color="#44D361"
              fontSize="xl"
              fontWeight="bold"
            >
              React
            </Circle>
          </Circle>
        </Box>
      </Flex>

      <Flex
        as="section"
        width="99vw"
        height="100vh"
        bg="#363636"
        mx="auto"
        mt={5}
        display="flex"
        align="center"
        justifyContent="center"
      >
        <Box>
          <Grid
            h={500}
            w={500}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={6}
          >
            <GridItem colSpan={2} bg="papayawhip">
              {" "}
            </GridItem>
            <GridItem colSpan={2} bg="papayawhip" />
            <GridItem colSpan={2} bg="papayawhip" />
            <GridItem colSpan={2} bg="tomato" />
            <GridItem colSpan={2} bg="tomato" />
            <GridItem colSpan={2} bg="tomato" />
          </Grid>
        </Box>
      </Flex>
    </>
  );
}
