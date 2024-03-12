import {Grid,Text,Box, Flex, Heading, useColorModeValue, Image, Center, Spacer, Container, Button,Link} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons";




export default function Colom () {

    let boxBg = useColorModeValue("#E2E8F0 !important", "#111c44 !important");

    return (
        <Flex p = {2} mt = {3} flexDirection="column" wrap="wrap">
            <Heading textAlign='center'
          fontSize='30px' >
                Infromaiont
            </Heading>
            <Flex p= {1} mt={5} justify= "space-around" gap="5" wrap="wrap"  >
                <Image src="images/ger.png" boxSize="120px" mt={5}  />
                    <Grid flex={1} p={4} ms={5}   >
                    <Text 
                        fontSize={{base: "18px",lg:"30px" ,xl:'35px'}}
                        fontWeight="700"
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text'
                        >
                        V1BIZ Staking Token DeFi App</Text>
                        <Container maxW= 'container.sm' as="samp">
                        It is a tool for depositing cryptocurrencies. to receive rewards
                        Your originalmoney is still available and you can withdraw it at any time.
                        </Container>
                    </Grid>
            </Flex>
            <Flex  p= {2} mt={5} justify= "space-between" gap="5" wrap="wrap" >
                    <Grid  flex={1} p={4} ms={5} >
                    <Text 
                        fontSize={{base: "18px",lg:"30px" ,xl:'35px'}}
                        fontWeight="700"
                        bgGradient='linear(to-l, gray.300, yellow.400, pink.200)'
                        bgClip='text'
                        textAlign='center'
                        >
                        MBIZ Reward 
                        </Text>
                        <Container maxW= 'container.sm' as="samp">
                        It is a tool for depositing cryptocurrencies. to receive rewards
                        Your originalmoney is still available and you can withdraw it at any time.
                        </Container>
                        <Flex alignItems="center" flexDirection="column">
                        <Link href="https://quickswap.exchange/#/swap?currency0=0xc0961b7658A7DfC79F431CAB5De4d1A4cd1132BB&currency1=0x1ded76F9f81f81De16C17bE38A316De27Bdcb9be&swapIndex=2">
                        
                        <Button
                         size='md'
                         height='38px'
                         width='180px'
                         border='2px'
                        rightIcon={<ArrowForwardIcon />}
                        colorScheme='teal' 
                        variant='outline'
                        textAlign="center"
                        >Swap</Button>
                        </Link>
                        <Image src="images/plants.png" boxSize="120px" mt={5}  />

                        <Text 
                        fontSize={{base: "15px",lg:"20px" ,xl:'28px'}}
                        fontWeight="700"
                        bgGradient='linear(to-l, gray.600,green.400, green.500)'
                        bgClip='text'
                        textAlign='center'
                        as="samp"
                        >
                         Sow your V1BIZ seeds to get your crops.
                        </Text>

                        </Flex>
                    </Grid>
                </Flex>
        </Flex>

    )

}
