import { Flex, HStack, VStack,Image ,Button, Input,Text,Heading} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import IconUni from "../img/IconUni.png"
import ImgBody from "../img/ImgBody.jpeg"
import twitter from "../img/twitter.png"
import reddit2 from "../img/reddit2.png"
import facebook12 from "../img/facebook12.png"


function Home() {
  return (
    <>
    <Flex backgroundColor='lightgray'>

    <VStack spacing='273' backgroundImage={ImgBody} backgroundSize='cover'>
       {/* Heading */}
      <HStack spacing='500' backgroundColor='#353a40' paddingX='59' paddingY='3' color='white' >

        {/* Icons */}
      <HStack spacing='3' >
        <Link target='_blank' href='https://chakra-ui.com/docs/components/link'>
      <Image src={twitter} />
        </Link >
        <Link target='_blank' href='https://chakra-ui.com/docs/components/link'>
      <Image src={facebook12}  />
        </Link>
        <Link target='_blank' href='https://chakra-ui.com/docs/components/link'>
      <Image src={reddit2} />
        </Link>
      
      </HStack>

      {/* Logo */}
      <Link to={<Home />}><Image src={IconUni} width='3rem'/> قيمني</Link>
     
     
      <HStack>

{/* sign is buttons */}
<Button _hover={{backgroundColor:"red.800",color:"white"}} color='black'padding='6' backgroundColor='red.400'  borderRadius='10' >تسجيل الخروج</Button>
<Button _hover={{backgroundColor:"#FFD05E",color:"black"}} color='black'padding='6' backgroundColor='White'  borderRadius='10' >حسابي</Button>
</HStack>      </HStack>

      {/* Body */}
        <VStack spacing='10' >
        <Heading color='#EEE'>ابحث عن الاستاذ الجامعي</Heading>
      <HStack spacing='3' >
        <Button _hover={{backgroundColor:"#FFD05E",color:"black"}} width='7rem' backgroundColor='black' color='white' borderRadius='50'>بحث</Button>
        <Input placeholder='ادخل اسم الاستاذ' border='solid 2px ' borderColor='black' width='22rem' borderRadius='10' backgroundColor='white' /> 
      </HStack>
        </VStack>
    <Footer />
    </VStack>
    </Flex>
    </>
  )
}

export default Home