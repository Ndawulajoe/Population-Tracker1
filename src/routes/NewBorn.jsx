import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';


import React, { useState } from 'react';
// import { DateInput } from '@mantine/dates';
export default function NewBorn() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    motherName: '',
    fatherName: '',
    hospitalName: '',
  });
  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    console.log('Form Data:', formData);
  }

  return (
  
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems: "center",minHeight: "100vh"}}>
       <h2>Fill in this form </h2>
       <TextInput
        onChange={(event) => handleInputChange("fullName", event.target.value)}
        name="fullName"
        value={formData.fullName}
        placeholder="Your name"
        label="Full name"
        withAsterisk
        className='w-56 ... pt-4 ...'
      />
  <DatePickerInput
  onChange={(date) => handleInputChange("dateOfBirth", date)}
  name="dateOfBirth"
  value={formData.dateOfBirth}
  // mt="md"
  popoverProps={{ withinPortal: true }}
  label="Departure date"
  placeholder="When will you leave?"
  withAsterisk
  className='w-56 ...'
/>

    <TextInput
         onChange={(event) => handleInputChange("motherName", event.target.value)}
    name="motherName"
    value={formData.motherName}
      placeholder="Enter mather's name"
      label="Mother's name"
      withAsterisk
      className='w-56 ...'
    />
    <TextInput
   onChange={(event) => handleInputChange("fatherName", event.target.value)}
    name="fatherName"
    value={formData.fatherName}
      placeholder="Enter fother's name"
      label="Fother's name "
      withAsterisk
      className='w-56 ...'
    />
    <TextInput
    onChange={(event) => handleInputChange("hospitalName", event.target.value)}
    name="hospitalName"
    value={formData.hospitalName}
      placeholder="Place of birth/hospital"
      label="Hospital name"
      withAsterisk
      className='w-56 ... pb-6 ...'
    />

   <Button color="dark" onClick={handleFormSubmit} >
      submit
    </Button>

    </div>
   
  );
}