import React, { Component } from 'react'
// import { useState, useEffect } from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap'
import Swal from 'sweetalert2'
// import Select from 'react-select'
import * as yup from 'yup';
import axios from 'axios';

class Registration extends Component {

    constructor(props){
        super(props);
        this.state = {
            categories: [],
            // url: 'http://103.41.205.87:2223/api/category',
            // registration: [],
            name: '',
            email: '',
            nowa: '',
            categoryID: '',
            token : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMDMuNDEuMjA1Ljg3OjIyMjNcL2FwaVwvbG9naW4iLCJpYXQiOjE2ODg0MzUyNTYsImV4cCI6MTY4ODQzODg1NiwibmJmIjoxNjg4NDM1MjU2LCJqdGkiOiJvcGdWTTI3WHhEQVVMYWxpIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.y2WYHofnEiDZOf3MDzsWh-l5KZvj-Umz7yxAPTeUvPY'
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.getCategory();
        // console.log();
    }

    getCategory = () => {
          axios.get('http://103.41.205.87:2223/api/category', {
            headers: {'Authorization' : `Bearer ${this.state.token}`}
          }).then(response => response.data)
          .then((data) => console.log(data))
          .then((data) => {
            this.setState({
                categories:data,
            })
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log([e.target.name] + ':' + e.target.value);
        // this.setState({
        //     name: value,
        //     email: value
        // });

    }

    handleSubmit(e){
        e.preventDefault();

        const data = {
            name:this.state.name,
            email:this.state.email,
            nowa:this.state.nowa,
            categoryID:this.state.categoryID,
        }

        axios.post('http://127.0.0.1:8000/api/registration', data)
        .then(
            Swal.fire({
                title: 'Success',
                text: 'Registration Success',
                icon: 'success',
                confirmButtonText: false,
                timer:3000
              })
        ).catch((err) => console.log(err))
    }

    // log = () =>console.log(this.state);

    render() {
    return (
        <section className='registration' id='registration'>
            <img src="./img/form-img.jpg" alt="" />
            <div className="form-registration">
                <div className="title-reg">Registration</div>
                <div className="form-reg">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Input onChange={this.handleChange} id="name" name="name" placeholder="Name" type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleChange} id="email" name="email" placeholder="Email" type="email" />
                    </FormGroup>
                    <FormGroup>
                    <Input id="exampleSelect" name="categoryID" onChange={this.handleChange} type="select">
                        <option value='' defaultValue>Categories</option>
                        {/* <option></option> */}
                        {this.state.categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.category} - {category.price}</option>
                        ))}
                    </Input>
                        {/* <Select placeholder='Choose Week' id='day' options={this.state.options} isOptionDisabled={(option) => option.disabled }
                        >
                        </Select> */}
                    </FormGroup>
                    <FormGroup>
                        <Input id="nowa" name="nowa" onChange={this.handleChange} placeholder="Whatsapp" type="number" />
                    </FormGroup>
                    <div className="btn">
                        <Button type='submit' className='btn-reg' color="dark" size="lg">Register</Button>
                    </div>
                </Form> 
                </div>
            </div>
        </section>
      )
    }
}

// export default Registration;