import { Card, Flex, Heading, SimpleGrid, Skeleton, Stack, Text,Divider,useColorModeValue,Image,Spacer, } from "@chakra-ui/react";
import {  useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { STAKE_TOKEN_ADDRESSES } from "../constants/addresses";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
 

export default function StakeToken() {
    const address = useAddress();
    const { contract: stakeTokenContract, isLoading: loadingStakeToken } = useContract(STAKE_TOKEN_ADDRESSES);
    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address);

    let boxBg = useColorModeValue("#E2E8F0 !important", "#111c44 !important");
    let mainText = useColorModeValue("gray.800", "white");
    let secondaryText = useColorModeValue("gray.400", "gray.400");
    

    return (
        <Flex
      borderRadius='20px'
      bg={boxBg}
      p='20px'
      h='345'
      w={{ base: "315px", md: "345px",}}
      
      direction='column'>
      <Image
        src='images/p12.png'
        maxW='100%'
        borderRadius='20px'
      />
      <Flex flexDirection='column' mb='30px'>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/v1bizstaking.appspot.com/o/b124-1.png.png?alt=media&token=fdcd77f0-75e8-4c72-afd5-c97abfa36c7e'
          border='5px solid red'
          mx='auto'
          borderColor={boxBg}
          width='68px'
          height='68px'
          mt='-38px'
          borderRadius='50%'
        />
        <Text
          fontWeight='600'
          color={mainText}
          textAlign='center'
          fontSize='xl'>
          V1BIZ TOKEN
        </Text>
        
        <Text
          color={secondaryText}
          textAlign='center'
          fontSize='sm'
          fontWeight='500'>
          Balance Token
        </Text>
      </Flex>
      <Flex justify='space-between' w='100%' px='36px'>
          
        <Flex flexDirection='column'>
            <Skeleton isLoaded={!loadingStakeToken && !loadingTokenBalance}>
          <Text 
            fontWeight='600'
            color={mainText}
            fontSize= {{ base:  "md", lg: "lg", xl: "xl" }}
            textAlign='center'>
           {tokenBalance?.displayValue}
          </Text>
          </Skeleton>
          <Skeleton isLoaded={!loadingStakeToken && !loadingTokenBalance}>
          <Text 
          color={secondaryText} 
          fontWeight='500'
          textAlign='center'>
          {tokenBalance?.symbol}
          </Text>
          </Skeleton>
        </Flex>
      </Flex>
    </Flex>
        
    )
}