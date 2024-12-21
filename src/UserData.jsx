import React, { useState } from "react";
import { Button, Stack, Table } from "@chakra-ui/react";
import { useEffect } from "react";

function UserData() {
  const [getData, setUserData] = useState([]);

  const GetUserData = async () => {
      try {
        const respnse = await fetch("http://localhost:8080/api/getData", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await respnse.json();

        setUserData(result.object);
      } catch (error) {
        console.log("error", error);
      }
    };


    useEffect(() => {
      GetUserData() // Fetch data when the component mounts
   ,[]});


  const deleteItem = async (item) => {
    console.log(item.id);
    try {
      const response = await fetch(
        "http://localhost:8080/api/deleteData?id=" + item.id + "",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result);
      
      GetUserData();

    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Stack gap="10">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>id</Table.ColumnHeader>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>email</Table.ColumnHeader>
            <Table.ColumnHeader>city</Table.ColumnHeader>
            <Table.ColumnHeader>Action</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {getData.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.city}</Table.Cell>
              <Table.Cell>
                <Button bgColor="red" onClick={() => deleteItem(item)} mr="5">
                  Delete
                </Button>
                <Button  bgColor="blue">Edit</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Stack>
  );
}


export default UserData;
