import React from 'react'
import{
    Tr,Td
}from '@chakra-ui/react';

const TbodyCom = ({id,email,body,title,userId,orderDate,name}) => {
  return (

      <Tr>
      <Td  isNumeric>{id}</Td>
      <Td >{email}{title}{body}</Td>
      <Td >{userId}{name}{email}</Td>
      </Tr>
   
  )
}

export default TbodyCom
