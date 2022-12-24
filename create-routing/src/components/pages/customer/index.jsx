import React from 'react'
import { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  // TableCaption,
  TableContainer,
  ChakraProvider,
} from '@chakra-ui/react';
import axios from "axios";
import TbodyCom from '../../tbody';

const CustomerCom = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
     axios
       .get("https://jsonplaceholder.typicode.com/users")
       .then((data) => setCustomers(data.data));
   }, []);
  return (
   <ChakraProvider>
         <TableContainer>
  <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>ID </Th>
        <Th>Email</Th>
        <Th>Name</Th>
      </Tr>
    </Thead>
    <Tbody>
 {customers.map((element)=>{
  return(
    <TbodyCom key={element.id} 
    id={element.id}
    email={element?.email}
    name={element.name}/>
  );
})}
    
    </Tbody>
  </Table>
</TableContainer>
   </ChakraProvider>

   
  );
};

export default CustomerCom
