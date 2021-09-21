import { Header } from "../components/Header";
import Image from "next/image";
import avatar from "../assets/avatar.svg";
import {
  DiReact,
  DiNodejs,
  DiJavascript,
  DiPostgresql,
  DiCss3,
  DiSass,
} from "react-icons/di";

import {SiTypescript} from 'react-icons/si'

import {
  Flex,
  Text,
  Icon,
  Box,
  HStack,
  Circle,
  Grid,
  VStack,
  Container,
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
          <Container>
            <Text fontSize="4xl" fontWeight="bold">
              Hello,
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
              I am Guilherme Eckert
            </Text>
            lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Architecto perferendis aliquam
            asperiores aspernatur reprehenderit, doloremque quis aliquid velit
            atque ratione quas? Vitae minima, velit laboriosam impedit sequi
            architecto repudiandae exercitationem?
          </Container>
          <Box
            as="button"
            bg="#8257E5"
            p={6}
            ml={40}
            mt={30}
            w={250}
            _hover={{ bg: "#6846b7", transition: "1s" }}
            style={{ borderRadius: "10px" }}
            fontWeight="bold"
            fontSize="xl"
          >
            {"Contact me"}
          </Box>
        </Box>

        <Box width={632} height={656} align="center">
          <Circle size={600}>
            <VStack spacing={50} position="absolute" ml={-520}>
              <Circle
                size={70}
                bg="#3B3B3B"
                position="relative"
                color="#44D361"
                fontSize="2xl"
                fontWeight="bold"
              >
                {"</>"}
              </Circle>
              <Circle
                size={70}
                bg="#3B3B3B"
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
              bg="#3B3B3B"
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
              bg="#3B3B3B"
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
              bg="#3B3B3B"
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
        p={20}
        bg="#363636"
        display="flex"
        flexDirection="column"
        align="center"
        justifyContent="center"
      >
        <HStack>
          <Box
            w={230}
            h={230}
            boxShadow="dark-lg"
            bg="#2A2A2A"
            fontWeight="bold"
            fontSize="3xl"
            p={4}
            style={{ borderRadius: "10px" }}
            centerAlign="center"
            textAlign="center"
            justifyContent="center"
          >
            Front-End
            <Icon as={DiReact} boxSize={40} color="#00D8FF" />
          </Box>

          <Box
            w={230}
            h={230}
            bg="#2A2A2A"
            boxShadow="dark-lg"
            fontWeight="bold"
            fontSize="3xl"
            p={4}
            style={{ borderRadius: "10px" }}
            centerAlign="center"
            textAlign="center"
            justifyContent="center"
          >
            Back-End
            <Icon as={DiNodejs} boxSize={40} color="#44D361" />
          </Box>

          <Box
            w={230}
            h={230}
            bg="#2A2A2A"
            boxShadow="dark-lg"
            fontWeight="bold"
            fontSize="3xl"
            p={4}
            style={{ borderRadius: "10px" }}
            centerAlign="center"
            textAlign="center"
            justifyContent="center"
          >
            Postgres
            <Icon as={DiPostgresql} boxSize={40} color="gray.50"></Icon>
          </Box>
          <Box
            w={230}
            h={230}
            bg="#2A2A2A"
            fontWeight="bold"
            boxShadow="dark-lg"
            fontSize="3xl"
            p={4}
            style={{ borderRadius: "10px" }}
            textAlign="center"
            centerAlign="center"
            justifyContent="center"
          >
            JavaScript
            <Icon as={DiJavascript} boxSize={40} color="yellow"></Icon>
          </Box>
        </HStack>

        <HStack m={10}>
          <Box
            w={230}
            h={230}
            bg="#2A2A2A"
            fontWeight="bold"
            fontSize="3xl"
            boxShadow="dark-lg"
            p={4}
            style={{ borderRadius: "10px" }}
            textAlign="center"
            centerAlign="center"
            justifyContent="center"
          >
            Sass
            <Icon as={DiSass} boxSize={40} color="#CE679B" />
          </Box>

          <Box
            w={230}
            h={230}
            bg="#2A2A2A"
            fontWeight="bold"
            boxShadow="dark-lg"
            fontSize="3xl"
            p={4}
            style={{ borderRadius: "10px" }}
            textAlign="center"
            centerAlign="center"
            justifyContent="center"
          >
            CSS
            <Icon as={DiCss3} boxSize={40} color="#264BDD"/>
          </Box>
          <Box
            w={230}
            h={230}
            bg="#2A2A2A"
            fontWeight="bold"
            fontSize="3xl"
            boxShadow="dark-lg"
            p={4}
            style={{ borderRadius: "10px" }}
            textAlign="center"
            centerAlign="center"
            justifyContent="center"
          >
            TypeScript
            <Icon as={SiTypescript} boxSize={40} color="#264BDD"/>
          </Box>
        </HStack>

        <Box
          display="flex"
          justify="center"
          align="center"
          flex-direction="column"
          mt={70}
  
        >
          <Text bg="black" position="absolute">
            {" "}
            haususauhsauhhsuauhas{" "}
          </Text>
          <Circle size={600} bg="white">
            {" "}
          </Circle>
          <VStack>
            <Circle size={230} bg="white">
              {" "}
            </Circle>
            <Spacer />
            <Circle size={230} bg="white">
              {" "}
            </Circle>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}
