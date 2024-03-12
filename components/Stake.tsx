import { Box, Card, Flex, Heading, Input, SimpleGrid, Skeleton, Stack, Text, useToast, Center,useColorModeValue,Image, Container, InputGroup, InputLeftElement, } from "@chakra-ui/react";
import { Web3Button, useAddress, useContract, useContractRead, useTokenBalance,} from "@thirdweb-dev/react";
import { REWARD_TOKEN_ADDRESSES, STAKE_CONTRACT_ADDRESSES, STAKE_TOKEN_ADDRESSES,} from "../constants/addresses";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Icon } from "@chakra-ui/react";
import { LockIcon, UnlockIcon} from "@chakra-ui/icons";
import styles from "../styles/Home.module.css";



  
  export default function Stake() {
    const address = useAddress();
  
    const { contract: stakeTokenContract } = useContract(
      STAKE_TOKEN_ADDRESSES,
      "token"
    );
    const { contract: rewardTokenContract } = useContract(
      REWARD_TOKEN_ADDRESSES,
      "token"
    );
    const { contract: stakeContract } = useContract(
      STAKE_CONTRACT_ADDRESSES,
      "custom"
    );
  
    const {
      data: stakeInfo,
      refetch: refetchStakeInfo,
      isLoading: loadingStakeInfo,
    } = useContractRead(stakeContract, "getStakeInfo", [address]);
  
    const { data: stakeTokenBalance, isLoading: loadingStakeTokenBalance } =
      useTokenBalance(stakeTokenContract, address);
  
    const { data: rewardTokenBalance, isLoading: loadingRewardTokenBalance } =
      useTokenBalance(rewardTokenContract, address);
  
    useEffect(() => {
      setInterval(() => {
        refetchStakeInfo();
      }, 10000);
    }, []);
  
    const [stakeAmount, setStakeAmount] = useState<string>("number");
    const [unstakeAmount, setUnstakeAmount] = useState<string>("number");
  
    function resetValue() {
      setStakeAmount("number");
      setUnstakeAmount("number");
    }
  
    const toast = useToast();

    let boxBg = useColorModeValue("White !important", "#1A202C !important");
    let mainText = useColorModeValue("gray.800", "white");
    let secondaryText = useColorModeValue("gray.400", "gray.400");
  
    return (
      <Card p={2} mt={6}
       bg={boxBg}
      borderRadius='20px' >
      
      <Container alignItems="center" p={2} mt={2}>
        <Center>
        <Image boxSize='120px' 
        src="images/staking22.png" />
        </Center>
        <Heading 
          fontWeight='600'
          color={mainText}
          textAlign='center'
          fontSize='xl'>
            Staking V1BIZ Token 
        </Heading>
        <Text 
          color={secondaryText}
          textAlign='center'
          fontSize='sm'
          fontWeight='500'>
            Staking VBIZ and earn MBIZ 
        </Text>
        </Container>
        

        <Flex justify="space-around" 
              wrap="wrap" 
              gap="5"
              >
        
          <Flex borderRadius='20px'
                bgGradient='linear(to-l, #9F7AEA,#805AD5)'
                p='20px'
                h='445px'
                w={{ base: "315px", md: "345px" }}
                alignItems='center'
                direction='column'>
           <Image
                  src='images/bgh2.png'
                  maxW='100%'
                  borderRadius='20px'
      />

            <Flex flexDirection='column' mb='30px' >
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
            
              <Text fontWeight='700'
                    color={mainText}
                    textAlign='center'
                    fontSize='xl'
              >
              BALANCE STAKING 
              </Text>
              <Text
                color={secondaryText}
                textAlign='center'
                fontSize='sm'
                fontWeight='600'>
                deposit more All withdrawn
               </Text>
              
              
              <Skeleton isLoaded={!loadingStakeInfo && !loadingStakeTokenBalance}>
                {stakeInfo && stakeInfo[0] ? (

                  <Text 
                  fontWeight='700'
                  color={mainText}
                  textAlign='center'
                  fontSize='xl'>

                    {ethers.utils.formatEther(stakeInfo[0])}
                    {" $" + stakeTokenBalance?.symbol}
                  </Text>
                ) : (
                  <Text>0</Text>
                )}
              </Skeleton>
            </Flex>
            <Flex alignItems="center">
              <Stack spacing={4}>
                <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <LockIcon color='gray.300' />
                </InputLeftElement>
                <Input
                  placeholder='Enter amount'
                  type="number"
                  max={stakeTokenBalance?.displayValue}
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                />
                </InputGroup>
                

                <Web3Button
                  contractAddress={STAKE_CONTRACT_ADDRESSES}
                  action={async (contract) => {
                    await stakeTokenContract?.erc20.setAllowance(
                      STAKE_CONTRACT_ADDRESSES,
                      stakeAmount
                    );
  
                    await contract.call("stake", [
                      ethers.utils.parseEther(stakeAmount),
                    ]);
                    resetValue();
                  }}
                  onSuccess={() =>
                    toast({
                      title: "Stake Successful",
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    })
                  } 
                  className={styles.btn}
                >
                  Stake
                </Web3Button>
              </Stack>

              <Stack spacing={4}>
                <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <UnlockIcon color='gray.300' />
                </InputLeftElement>
                <Input 
                  placeholder='Enter amount'
                  type="number"
                  value={unstakeAmount}
                  onChange={(e) => setUnstakeAmount(e.target.value)}
                />
                </InputGroup>
                <Web3Button
                  contractAddress={STAKE_CONTRACT_ADDRESSES}
                  action={async (contract) => {
                    await contract.call("withdraw", [
                      ethers.utils.parseEther(unstakeAmount),
                    ]);
                  }}
                  onSuccess={() =>
                    toast({
                      title: "Unstake Successful",
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    })
                  }
                  className={styles.btn}
                >
                  Unstake
                </Web3Button>
              </Stack>
            </Flex>
          </Flex>

          <Flex borderRadius='20px'
                bgGradient='linear(to-l, teal.500, green.500)'
                p='20px'
                h='445px'
                w={{ base: "315px", md: "345px" }}
                alignItems='center'
                direction='column'>
                  <Image
        src='images/bgh2.png'
        maxW='100%'
        borderRadius='20px' />

            <Flex
              h={"100%"}
              justifyContent={"space-between"}
              direction={"column"}
              textAlign={"center"}
            >
              <Image
                    src='images/mbiz3.png'
                    border='5px solid red'
                    mx='auto'
                    borderColor={boxBg}
                    width='68px'
                    height='68px'
                    mt='-38px'
                    borderRadius='50%'
                    alt='Dan Abramov' />

              <Text fontWeight='700'
                    color={mainText}
                    textAlign='center'
                    fontSize='xl'
                    >
                MY REWARD
              </Text>
              <Text
                color={secondaryText}
                textAlign='center'
                fontSize='sm'
                fontWeight='600'>
                Withdraw your winnings 24 hours.
               </Text>
               <Center>
               <Image alt='Dan Abramov'
                      borderColor={boxBg}
                      borderRadius='full'  
                      boxSize='80px' 
                      src="images/poiygon333.gif" />
                </Center>
              <Skeleton isLoaded={!loadingStakeInfo && !loadingRewardTokenBalance} >
                        {stakeInfo && stakeInfo[0] ? (
                  <Box>
                    <Text fontWeight='700'
                          color={mainText}
                          textAlign='center'
                          fontSize='xl'
                          >
                          {ethers.utils.formatEther(stakeInfo[1])}
                    </Text>

                    <Text color={secondaryText}
                          textAlign='center'
                          fontSize='sm'
                          fontWeight='800' >
                  {"$" + rewardTokenBalance?.symbol}</Text>
                  </Box>
                ) : (
                  <Text>0</Text>
                )}
              </Skeleton>
              <Web3Button
                contractAddress={STAKE_CONTRACT_ADDRESSES}
                action={async (contract) => {
                  await contract.call("claimRewards");
                  resetValue();
                }}
                onSuccess={() =>
                  toast({
                    title: "Rewards Claimed",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  })
                }
                className={styles.btn}
              >
                Claim
              </Web3Button>
            </Flex>
          </Flex>
        </Flex>
        
      </Card>
    );
  }
  