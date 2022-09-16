import { Flex, HStack, VStack,Image ,Button, Input,Text,Link} from '@chakra-ui/react'
import React from 'react'
import IconUni from "../img/IconUni.png"
import ImgBody from "../img/ImgBody.jpeg"
import twitter from "../img/twitter.png"
import reddit2 from "../img/reddit2.png"
import facebook12 from "../img/facebook12.png"



function Footer() {
  return (
    <>
    <Flex width='100%' height='4rem' backgroundColor='#353a40' color='white' justifyContent='center' alignItems='center' justifyItems='center' >
       <HStack spacing='10'>

        <Text dir='RTL'>
            تواصل معنا: demo@demo.com
        </Text>
         {/* Icons */}
      <HStack spacing='3' >
        <Link target='_blank' href='https://chakra-ui.com/docs/components/link'>
      <Image src={twitter} width='10' />
        </Link >
        <Link target='_blank' href='https://chakra-ui.com/docs/components/link'>
      <Image src={facebook12} width='10'  />
        </Link>
        <Link target='_blank' href='https://chakra-ui.com/docs/components/link'>
      <Image src={reddit2} width='10'/>
        </Link>
      
      </HStack>
       </HStack>
      
    </Flex>
    </>
  )
}

export default Footer