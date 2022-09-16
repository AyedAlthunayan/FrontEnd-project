import React from 'react'
import { Flex, Heading, HStack, VStack ,Image, Button, Input} from '@chakra-ui/react'
import Footer from '../components/Footer'
import IconUni from "../img/IconUni.png"
import { Link } from 'react-router-dom'
import Login from './Login'



function Register() {
  return (
    <>
     <VStack >

<Flex justifyContent='center'alignItems='center' height='90vh'>
<HStack spacing='10'>

<HStack width='50%' justifyContent='center'alignItems='center'>
<Image   src='https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740&t=st=1663176928~exp=1663177528~hmac=b5b1a84c76302e0d5272e0027053467566a2f136eb18eefdbc5601f177236ed1'/>
</HStack>
<HStack  width='50%' justifyContent='center'alignItems='center'>
    <VStack width='25rem' spacing='5' backgroundColor='#F4F3F3' padding='2rem' borderRadius='5' border='gray solid 1px'>
    <Heading><Image src={IconUni} width='3rem'/>نموذج تسجيل </Heading>
   <Input type='text' placeholder='اسم المستخدم' />
   <Input type='email' placeholder='الايميل' />
   <Input type='password' placeholder='كلمة المرور' />
   <Input type='password' placeholder='تأكيد كلمة المرور' />
   <HStack spacing='10'>
    <Link to=''>

   <Button _hover={{backgroundColor:'black', color:'white'}} color='black'padding='6' backgroundColor='#FFD05E' >تسجيل</Button>
    </Link>
    <Link to='/login'>
    <Button _hover={{backgroundColor:'#FFD05E',color:'black'}} color='white'padding='6' backgroundColor='black' >لدي حساب</Button>

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

export default Register