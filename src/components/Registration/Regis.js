import React from 'react'
import { useState, useEffect } from 'react';
import {Form, FormGroup, Input, Button, FormFeedback} from 'reactstrap'
import Swal from 'sweetalert2'
import * as yup from 'yup';
import axios from 'axios';
import { useFormik } from 'formik';

const Regis = () => {

    const [category, setCategory] = useState([]);
    const [token, setToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMDMuNDEuMjA1Ljg3OjIyMjNcL2FwaVwvbG9naW4iLCJpYXQiOjE2ODg0MzczODYsImV4cCI6MTY4ODQ0MDk4NiwibmJmIjoxNjg4NDM3Mzg2LCJqdGkiOiJBNWtnNE9CZkpJTklONFhqIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.l3EynUissA6vVscvfDu6VQzGD6EFFl8QZLPFVDlAKUs')
    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            nowa: '',
            categoryID: '' 
        },
        // validation
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            nowa: yup.number().required(),
            categoryID: yup.number().required()
        }),

        // submit
        onSubmit: async (values, {resetForm}) => {
            const user = {
                name:values.name,
                email:values.email,
                nowa: values.nowa,
                categoryID: values.categoryID
            }
            await axios.post('http://103.41.205.87:2223/api/registration', user, 
                { headers: {'Authorization' : `Bearer ${token}`}
              }).then( response => {
                 console.log(response)
                }).then(
                    Swal.fire({
                        title: 'Success',
                        text: `Registration Succes`,
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                )
                .then(resetForm(values))
             
            .catch(err => console.log(err))
            }
    })

    useEffect(() => {
        getCategory();
        console.log('useEffect');
    },[])

    const getCategory = () => {
        axios.get('http://103.41.205.87:2223/api/category', {
            headers: {'Authorization' : `Bearer ${token}`}
          })
        .then((data) => setCategory(data.data))
        .catch((err) => console.log(err))
    }

    return (
        
        <section className='registration' id='registration'>
            <img src="./img/form-img.jpg" alt="" />
            <div className="form-registration">
                <div className="title-reg">Registration</div>
                <div className="form-reg">
                <Form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <Input 
                        invalid={formik.touched.name && formik.errors.name ? true : false} 
                        onChange={formik.handleChange} 
                        value={formik.values.name}
                        id="name" name="name" placeholder="Name"  type="text" />
                        <FormFeedback>
                            {formik.errors.name}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input invalid={formik.touched.email && formik.errors.email ? true : false}
                         id="email" name="email" placeholder="Email" type="text" 
                         onChange={formik.handleChange} 
                         value={formik.values.email}/>
                        <FormFeedback>
                            {formik.errors.email}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                    <Input invalid={formik.touched.categoryID && formik.errors.categoryID ? true : false} id="exampleSelect" name="categoryID" type="select" onChange={formik.handleChange} value={formik.values.categoryID}>
                        <option value='' defaultValue>Categories</option>
                        {/* <option></option> */}
                        {category.map((category) => (
                            <option key={category.id} value={category.id}>{category.category} - {category.price}</option>
                        ))}
                    </Input>
                        <FormFeedback>
                            {formik.errors.categoryID}
                        </FormFeedback>
                        {/* <Select placeholder='Choose Week' id='day' options={this.state.options} isOptionDisabled={(option) => option.disabled }
                        >
                        </Select> */}
                    </FormGroup>
                    <FormGroup>
                        <Input invalid={formik.touched.nowa && formik.errors.nowa ? true : false} id="nowa" name="nowa" placeholder="Whatsapp" type="number" onChange={formik.handleChange} 
                        value={formik.values.nowa} />
                        <FormFeedback>
                            {formik.errors.nowa}
                        </FormFeedback>
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

export default Regis