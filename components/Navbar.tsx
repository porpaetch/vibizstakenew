import { Avatar, Box, Container, Flex,GridItem,HStack,Heading,Icon,IconButton,Image, Spacer,VStack,useColorModeValue } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import DarkModeSwitch from "./DarkModeSwitch";
import styles from "../styles/Home.module.css";
import { TriangleDownIcon } from "@chakra-ui/icons";




export default function Navbar() {
            let boxBg = useColorModeValue("white !important", "#111c44 !important");
            let mainText = useColorModeValue("gray.800", "white");
            let secondaryText = useColorModeValue("gray.400", "gray.400");
    return (
        <VStack p={5}>
            <Flex w="100%" as='nav' gap={5} alignItems="center">
                 
            <Icon as={TriangleDownIcon} 
                      boxSize={{ base: "22px", md: "25", lg: "30"}}/>
                <Heading  fontWeight='700'
                          color={mainText}
                          textAlign='center'
                          fontSize={{ base: "15px", md: "23px" }}
                          
                            
                >
                V1BIZ
                </Heading>
                <Spacer />
                <Avatar  size="sm" src='https://firebasestorage.googleapis.com/v0/b/v1bizstaking.appspot.com/o/polygon%20(1).png?alt=media&token=6c4cc2bf-62af-43f8-b8d1-d5e99964c026' />
                <DarkModeSwitch />
                <ConnectWallet
                btnTitle="Enter App"
                className={styles.connectButton } 
                />
            </Flex>
        </VStack>
    )
}

//direction={"row"} justifyContent={"space-between"}>