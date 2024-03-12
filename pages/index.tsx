import { NextPage } from "next";
import { Heading,Box, Container, Flex,Text,Image, GridItem,useColorModeValue, useMediaQuery,Circle, Stack, Icon, VStack, } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import StakeToken from "../components/StakeToken";
import RewardToken from "../components/RewardToken";
import Profile from "../components/Profile"
import Stake from "../components/Stake";
import Colom from "../components/Colom";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import AddMetaMask from "../components/AddMetaMask";
import End from "../components/End";
import { color } from "framer-motion";
import { wrap } from "module";




const Home: NextPage = () => {
  const address = useAddress();
  

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  let mainText = useColorModeValue("gray.800", "white");
  

  if (!address) {
    return (
          <Container maxW={"1200px"} >
             
              <Flex justify="space-evenly" alignItems="center"  wrap="wrap" gap={2}
                 p={2} mt={2}
                alignSelf="flex-start">
                  <Box mt="10" alignItems ='flex-start'>
                  <Text fontSize={{ base:  "2xl", lg: "3xl", xl: "4xl" }}
                      fontWeight="semibold"> Welcome to staking and earn </Text>
                      <Text fontSize={{ base: "3xl", lg: "5xl", xl: "6xl" }}
                      fontWeight="bold" bgGradient= "linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'> Pleas Connect your wallet</Text>
                      <Text color={mainText} > Use the V1BIZ Token assets as collateral in exchange for the right to verify transactions. It is a process of consensus or validation of transactions. Receive rewards from staking</Text>
                  
                  </Box>
                  <Image  alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                   
                   
                    boxSize={{ base:  "200px", lg: "250px", xl: "300px" }}  src="https://firebasestorage.googleapis.com/v0/b/v1bizstaking.appspot.com/o/blockchain.png?alt=media&token=b5cc1d64-6f0a-4e2c-a430-d07fdc1c0d41" />

              </Flex>
             
            
             <Flex  w="100%"wrap="wrap"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }} >
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="3xl" textAlign="center" >
                    50M+
                </Heading>
                <Text fontSize="2xl" color="gray.400" textAlign="center" >Pool Reword MBIZ</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="3xl" textAlign="center">
                    1,000
                </Heading>
                <Text fontSize="2xl" color="gray.400">Limit Stake of ID Wallet</Text>
            </Box> 
        </Flex>
        <Flex justify="center" wrap="wrap" gap={2} alignItems="center">
          <Image src="https://firebasestorage.googleapis.com/v0/b/v1bizstaking.appspot.com/o/b124-1.png.png?alt=media&token=fdcd77f0-75e8-4c72-afd5-c97abfa36c7e"
          borderRadius='full'
          backgroundColor="transparent" boxShadow="lg"
          boxSize={{ base:  "50", lg: "80", xl: "100px" }}  />
          <Box  alignItems ='flex-start' px="10" py="2">
                  <Text fontSize={{ base:  "lg", lg: "xl", xl: "2xl" }}
                      fontWeight="semibold" textAlign="center"> V1BIZ Token </Text>
                      <Text color={mainText} textAlign="center"> The V1BIZ token is the core asset that powers the network of community organizations. Community powered The total number of creations expected to be created is 30 million. It is a medium for generating income or investing all games in the V1BIZ organization and can also load the direction of the organization.</Text>
                      </Box>
          </Flex>
          
          </Container>
        )
    }


//ดึงข้อมูลโทเคนและรีวอท
return (
<Container maxW={"1200px"} py={2} alignItems="center">
 <Flex
 justify="space-evenly"
 wrap="wrap" 
 gap="5"
 alignItems="center"
 >
  
 <StakeToken />
 <RewardToken />
 <Profile />
 
 </Flex>
 <GridItem alignItems="center">
 <Stake />
 <Colom />
 <AddMetaMask />
 <End />
 </GridItem>
</Container>
   
  );
  
};

export default Home;

//h={"200px"}