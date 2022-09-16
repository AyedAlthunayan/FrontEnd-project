import { Flex, Heading, HStack, VStack ,Image, Button, Input} from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import Logo from "../img/logo.jpg"
import ImgLogin from "../img/ImgLogin.jpg"
import IconUni from "../img/IconUni.png"
import { Link } from 'react-router-dom'


// const img= [
//   ImgLogin,
// Logo
// ]

function Login() {
  return (
    <>
    <VStack >

    <Flex justifyContent='center'alignItems='center' height='90vh'>
    <HStack spacing='10'>
    <HStack width='50%' justifyContent='center'alignItems='center'>
    <img src={ImgLogin} alt="ImgLogin" /> 
       </HStack>

    <HStack  width='50%' justifyContent='center'alignItems='center'>
        <VStack justifyContent='center' width='25rem' spacing='5' backgroundColor='#F4F3F3' padding='2rem' borderRadius='5' border='gray solid 1px'>
        <Heading><Image src={IconUni} width='3rem'  />نموذج تسجيل الدخول</Heading>
       <Input type='email' textAlign='right' placeholder='الايميل' />
       <Input type='password' textAlign='right' placeholder='كلمة المرور' />
       <HStack spacing='10'>
        <Link to=''>
       <Button color='white' _hover={{backgroundColor:'#FFD05E',color:'black'}}  backgroundColor='black' >تسجيل الدخول</Button>
        </Link>
        <Link to='/register'>
       <Button color='black' _hover={{backgroundColor:'black', color:'white'}} backgroundColor='#FFD05E' >تسجيل</Button>
        </Link>

       </HStack>
        </VStack>
    </HStack>
    </HStack>

    </Flex>
    <Footer />
    </VStack>
    
    </>
  )
}

export default Login