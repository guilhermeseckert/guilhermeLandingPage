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

import { SiTypescript } from "react-icons/si";

import {
  Flex,
  Text,
  Icon,
  Box,
  HStack,
  Circle,
  VStack,
  Container,
  Spacer,
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
              <Box mb={-124}  style={{ boxShadow: "6 0 0px #0c0c0c" }} >
              <Image  width="460" height="660" src={avatar} alt="avatar" />  
              </Box>
              
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
        flexDirection="column"
        align="center"
        justifyContent="center"
      >
        <HStack spacing={8}>
          <Box
            bg="#2A2A2A"
            w={180}
            h={180}
            boxShadow="dark-lg"
            fontWeight="bold"
            fontSize="xl"
            p={4}
            style={{ borderRadius: "10px" }}
            display="flex"
            flexDirection="column"
            align="center"
          >
            Front-End
            <Spacer />
            <Icon
              alignSelf="center"
              as={DiReact}
              boxSize="90px"
              color="#00D8FF"
            />
          </Box>

          <Box
            bg="#2A2A2A"
            w={180}
            h={180}
            boxShadow="dark-lg"
            fontWeight="bold"
            fontSize="xl"
            p={4}
            style={{ borderRadius: "10px" }}
            display="flex"
            flexDirection="column"
            align="center"
          >
            Back-End
            <Spacer />
            <Icon
              alignSelf="center"
              as={DiNodejs}
              boxSize="90px"
              color="#44D361"
            />
          </Box>

          <Box
            bg="#2A2A2A"
            w={180}
            h={180}
            boxShadow="dark-lg"
            fontWeight="bold"
            fontSize="xl"
            p={4}
            style={{ borderRadius: "10px" }}
            display="flex"
            flexDirection="column"
            align="center"
          >
            Postgres
            <Spacer />
            <Icon
              alignSelf="center"
              as={DiPostgresql}
              boxSize="90px"
              color="gray.50"
            ></Icon>
          </Box>

          <Box
            bg="#2A2A2A"
            w={180}
            h={180}
            boxShadow="dark-lg"
            fontWeight="bold"
            fontSize="xl"
            p={4}
            style={{ borderRadius: "10px" }}
            display="flex"
            flexDirection="column"
            align="center"
          >
            JavaScript
            <Spacer />
            <Icon
              alignSelf="center"
              as={DiJavascript}
              boxSize="90px"
              color="yellow"
            ></Icon>
          </Box>
        </HStack>

        <HStack spacing={8} mt={10}>
          <Box
              bg="#2A2A2A"
              w={180}
              h={180}
              boxShadow="dark-lg"
              fontWeight="bold"
              fontSize="xl"
              p={4}
              style={{ borderRadius: "10px" }}
              display="flex"
              flexDirection="column"
              align="center"
          >
            Sass
            <Spacer />
            <Icon alignSelf="center"  as={DiSass} boxSize="90px" color="#CE679B" />
          </Box>

          <Box
               bg="#2A2A2A"
               w={180}
               h={180}
               boxShadow="dark-lg"
               fontWeight="bold"
               fontSize="xl"
               p={4}
               style={{ borderRadius: "10px" }}
               display="flex"
               flexDirection="column"
               align="center"
          >
            CSS
            <Spacer />
            <Icon alignSelf="center"  as={DiCss3} boxSize="90px" color="#264BDD" />
          </Box>
          <Box
              bg="#2A2A2A"
              w={180}
              h={180}
              boxShadow="dark-lg"
              fontWeight="bold"
              fontSize="xl"
              p={4}
              style={{ borderRadius: "10px" }}
              display="flex"
              flexDirection="column"
              align="center"
          >
            TypeScript
            <Spacer />
            <Icon alignSelf="center" as={SiTypescript} boxSize="90px" color="#264BDD" />
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
          <Circle size={800} bg="white">
            {" "}
          </Circle>
          <VStack>
            <Circle size={190} bg="white">
              {" "}
            </Circle>
            <Spacer />
            <Circle size={190} bg="white">
              {" "}
            </Circle>
          </VStack>
        </Box>
   
      </Flex>

      <Flex
        as="section"
        width="99vw"
        h="100vh"
        p={20}
        flexDirection="column"
        align="center"
        justifyContent="center"
       >


       </Flex>
    </>
  );
}
