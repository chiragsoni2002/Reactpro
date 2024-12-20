import React, { useState } from "react";
import { Stack, Table } from "@chakra-ui/react";
import { useEffect } from "react";

function UserData() {

  const[getData, setUserData] = useState([]);

  const GetUserData = async () => {

    try {
      const respnse = await fetch("http://localhost:8080/api/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await respnse.json();
      
      setUserData(result.object)
      
    } catch (error){
        console.log("error" , error);
    }
  };

  useEffect(() => {
    GetUserData() // Fetch data when the component mounts
 ,[]});
  
 
  
  return (

    <Stack gap="10">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>id</Table.ColumnHeader>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader >email</Table.ColumnHeader>
            <Table.ColumnHeader>city</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {getData.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{index+1}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.city}</Table.Cell>
              
            </Table.Row>
          ))}
        </Table.Body>
        
      </Table.Root>
    </Stack>
  );
}



// const items = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
//   { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
//   { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
//   { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
//   { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
// ];

export default UserData;
