import React from "react";
// Chakra imports
import { Button, Flex, Icon, Image, Text, useColorModeValue,Box,Avatar,AvatarGroup, Stat, StatLabel, StatNumber,StatGroup,StatHelpText,StatArrow} from "@chakra-ui/react";
import { SmallAddIcon,CopyIcon } from "@chakra-ui/icons";

export default function Profile() {
  let boxBg = useColorModeValue("#E2E8F0 !important", "#111c44 !important");
  let secondaryBg = useColorModeValue("gray.50", "whiteAlpha.100");
  let mainText = useColorModeValue("gray.800", "white");
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");
  let iconColor = useColorModeValue("brand.200", "white");
  return (
    <Flex
    borderRadius='20px'
    bg={boxBg}
    h='345px'
    w={{ base: "315px", md: "345px" }}
    direction='column'
      
      >
        <Box p="20px">
       <Flex w='100%' mb='10px'>
          <Image boxSize='80px'
          src='images/mining.png' me='auto' />
          <Button
            w='38px'
            h='38px'
            
            bg={iconBox}>
            <Icon
              w='24px'
              h='24px'
              as={SmallAddIcon}
              color={iconColor}
            />
          </Button>
         </Flex>
         <Box>
          <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
          All Pool Reward 
          </Text>
          <StatGroup>
              <Stat>
                 <StatLabel>my pool </StatLabel>
                    <StatNumber>50M+</StatNumber>
                      </Stat>
                            <Stat>
                            <StatLabel>Swap</StatLabel>
                            
                            <StatHelpText>
                        <StatArrow type='increase' />
                        10 MBIZ → 1 V1BIZ
                        </StatHelpText>
                        
                </Stat>
          </StatGroup>

        </Box>
        </Box>
        <Flex
        bg={secondaryBg}
        w='100%'
        p='20px'
        borderBottomLeftRadius='inherit'
        borderBottomRightRadius='inherit'
        height='100%'
        direction='column'>
        <Text
          fontSize='sm'
          color='gray.500'
          lineHeight='24px'
          pe='40px'
          fontWeight='500'
          mb='auto'>
         It is a reward of 50 million tokens that will be distributed to those who deposit V1BIZ Tokens.
        </Text>
        </Flex>
    </Flex>
  );
}

