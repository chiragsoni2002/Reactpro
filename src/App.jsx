import { Field } from "./components/ui/field";
import { GridItem, Input} from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { Button } from "./components/ui/button";
import { useState } from "react";

function App() {

  const[formData, setFormData] = useState({
    name : '',
    email : '',
    city : ''
  });

  const handelSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);

    try {
      const respnse = await fetch("http://localhost:8080/api/formpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });
      const result = await respnse.json();
      console.log(result);
    } catch (error) {
      console.log("Erroer", error);
    }

    setFormData({
      name : '',
      email : '',
      city : ''
    })

    
  }

  const handelChange = (event) => {

    const {name, value} = event.target;

    setFormData({
      ...formData,
      [name] : value,
    });


    
    

  }

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap="6" marginTop={100}>
        <GridItem></GridItem>
        <GridItem>
          <form onSubmit={handelSubmit}>
            
          <Field label="Name">
            <Input required type="text" value={formData.name} name="name" onChange={handelChange} placeholder="Enter Full Name" />
          </Field>
          <Field label="Email">
            <Input type="email" value={formData.email} name="email" onChange={handelChange} placeholder="me@example.com" />
          </Field>
          <Field label="City">
            <Input type="text" value={formData.city} name="city" onChange={handelChange} placeholder="City" />
          </Field><br></br>

          <Button type="submit">Submit</Button>
          </form>
        </GridItem>

      </Grid>
    </>
  );
}

export default App;
