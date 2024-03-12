import { Flex ,Box,Image, Icon, Button, Heading,Text, Avatar, WrapItem, Wrap, Grid, Container, Link} from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";



export default  function End () {

    return (
            <Flex  p={5} mt={10}
            justify="space-around" gap={5} flexDirection="column">

                
                <Text fontSize={{base: "18px",lg:"30px" ,xl:'35px'}}
                        fontWeight="700"
                        bgGradient='linear(to-l, blue.500, cyan.200, pink.200)'
                        bgClip='text'
                        textAlign='center'
                        as="samp">
                Follow me
                </Text> 
               
                <Container>
                 <Wrap>    
                
                <WrapItem>
                <Avatar size='sm'  src='https://firebasestorage.googleapis.com/v0/b/v1bizstaking.appspot.com/o/mbiz64.png?alt=media&token=366f225f-3faa-4212-a10d-b4dbbf8afbe8' />{' '}
                </WrapItem>
                <WrapItem>
                <Avatar size='sm' name='Ryan Florence' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/200px-GitHub_Invertocat_Logo.svg.png' />
                {' '}
                </WrapItem>
                <WrapItem>
                <Avatar
      size='md'
      name='Telegram '
      src='https://firebasestorage.googleapis.com/v0/b/v1bizstaking.appspot.com/o/b124-1.png.png?alt=media&token=fdcd77f0-75e8-4c72-afd5-c97abfa36c7e'
              />{' '}
           </WrapItem>
  <WrapItem>
    <Link href=" https://t.me/v1bizstaking">
    <Avatar size='lg' name='Telegram' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png' />
    </Link>
    {' '}
  </WrapItem>
  <WrapItem>
    <Link href="https://twitter.com/V1Biz">
    <Avatar 
    size="xl"
    name='x' 
    src='https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710115200&semt=ais' />{' '}
    </Link>
  </WrapItem>
</Wrap>
</Container>

          <Text textAlign="center" as="samp">
            @ 2024 v1biz stake contract from thirdweb.. 

          </Text>
          <Text textAlign="center" as="samp">
           @@@ polygon scam @@@@
            
          </Text>

            </Flex>

    )
}