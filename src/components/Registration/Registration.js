import React from 'react'
import { useState, useEffect } from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap'
import Select from 'react-select'

const Registration = () => {

    const [days, setDay] = useState([]);
    
    // useEffect(() => {
    //     fetch("http://127.0.0.1:8000/api/day")
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then(data => {
    //         setDay(data)
    //         // console.log(data);
    //     })        
    // }, [])

    
    const options = 
    days.map((days) => ({
        label: days.weekday,
        value: days.weekday, 
        disabled: days.isClosed,
        // disabled: () => { return days.isOpen = 1 ? true : false }
        // isDisable: (disabled) => { days.isOpen = 0 ? this.disabled = true : this.disabled = false }
    }
    ))
    
    console.log(options);


  return (
    <section className='registration' id='registration'>
        <img src="./img/form-img.jpg" alt="" />
        <div className="form-registration">
            <div className="title-reg">Registration</div>
            <div className="form-reg">
            <Form>
                <FormGroup>
                    <Input id="name" name="name" placeholder="Name" type="text" />
                </FormGroup>
                <FormGroup>
                    <Input id="email" name="email" placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup>
                    <Select id='day' options={options} isOptionDisabled={(option) => option.disabled}
                    >
                    </Select>
                </FormGroup>
                <FormGroup>
                    <Input id="nowa" name="nowa" placeholder="Whatsapp" type="number" />
                </FormGroup>
                <div className="btn">
                    <Button className='btn-reg' color="dark" size="lg">Register</Button>
                </div>
            </Form> 
            </div>
        </div>
    </section>
  )
}

export default Registration 