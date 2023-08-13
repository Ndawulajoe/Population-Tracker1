import { useState } from 'react';
import { TextInput, Button } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
// import axios from 'axios';

export default function NewBorn() {
  const [formdata, setFormData] = useState({
    fullaname: '',
    dateofBirth: null,
    mother: '',
    father: '',
    hospitalname: '',
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      data: {
        ... formdata
      }
    };

    axios.post("http://localhost:1337/api/populationtrackers", userData)
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <h2>Fill in this form</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          name='fullaname'
          value={formdata.fullaname}
          onChange={handleChanges}
          placeholder="Your name"
          label="Full name"
          withAsterisk
          className='w-56 ... pt-4 ...'
        />
        <DatePickerInput
          name='dateofBirth'
          value={formdata.dateofBirth}
          // onChange={handleChanges}
          onChange={(value) => handleChanges({ target: { name: 'dateofBirth', value } })}
          popoverProps={{ withinPortal: true }}
          label="Departure date"
          placeholder="When will you leave?"
          withAsterisk
          className='w-56 ...'
        />
        <TextInput
          name='mother'
          value={formdata.mother}
          onChange={handleChanges}
          placeholder="Enter mother's name"
          label="Mother's name"
          withAsterisk
          className='w-56 ...'
        />
        <TextInput
          name='father'
          value={formdata.father}
          onChange={handleChanges}
          placeholder="Enter father's name"
          label="Father's name"
          withAsterisk
          className='w-56 ...'
        />
        <TextInput
          name='hospitalname'
          value={formdata.hospitalname}
          onChange={handleChanges}
          placeholder="Place of birth/hospital"
          label="Hospital name"
          withAsterisk
          className='w-56 ... pb-6 ...'
        />

        <Button color="dark" type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
}
