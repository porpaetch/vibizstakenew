import { Button, Card, Container, Flex,Image,Text } from "@chakra-ui/react";
import {  DownloadIcon} from "@chakra-ui/icons";




export default function AddMetaMask () {

//add v1biz
const AddToMM = async () => {
    try {
        const { ethereum } = window
        await ethereum.request ({
            method: 'wallet_watchAsset',
            params: {
                type : 'ERC20',
                options: {

                    address: "0x1ded76F9f81f81De16C17bE38A316De27Bdcb9be", //Token address
                    symbol: 'V1BIZ',
                    decimals: 18,
                    image: 'https://firebasestorage.googleapis.com/v0/b/v1bizstaking.appspot.com/o/b124-1.png.png?alt=media&token=fdcd77f0-75e8-4c72-afd5-c97abfa36c7e', 
                },
            },
        })
    }   catch (ex) {
        console.error(ex)
    }
}

//add mbiz token 
const AddMBIZ = async () => {
    try {
        const { ethereum } = window
        await ethereum.request ({
            method: 'wallet_watchAsset',
            params: {
                type : 'ERC20',
                options: {

                    address: "0xc0961b7658A7DfC79F431CAB5De4d1A4cd1132BB", //Token address
                    symbol: 'MBIZ',
                    decimals: 18,
                    image: 'https://firebasestorage.googleapis.com/v0/b/v1bizstaking.appspot.com/o/mbiz64.png?alt=media&token=366f225f-3faa-4212-a10d-b4dbbf8afbe8', 
                },
            },
        })
    }   catch (ex) {
        console.error(ex)
    }
}



return (
    <Flex justify="space-around" gap={5} flexDirection="column">
        
        <Container>
        <Image src="https://firebasestorage.googleapis.com/v0/b/v1bizstaking.appspot.com/o/metamask.png?alt=media&token=462f997c-2b92-4325-a780-20521a8c0f6d"
        maxW="100%" 
        /> 
        </Container>
        <Text 
                        fontSize={{base: "18px",lg:"30px" ,xl:'35px'}}
                        fontWeight="700"
                        bgGradient='linear(to-l, blue.500, cyan.200, pink.200)'
                        bgClip='text'
                        textAlign='center'
                        as="samp"
                        >
                        Add V1BIZ or MBIZ To MateMask  
                        </Text>
        <Button onClick={AddToMM}
         rightIcon={<DownloadIcon />}
         colorScheme='teal' 
         variant='outline'
         textAlign="center"
        >Add V1BIZ to Matemask</Button>
        <Button onClick={AddMBIZ}
         rightIcon={<DownloadIcon />}
         colorScheme='teal' 
         variant='outline'
         textAlign="center"
        >Add MIBZ to Matemask</Button>
        
    </Flex>

);
}

