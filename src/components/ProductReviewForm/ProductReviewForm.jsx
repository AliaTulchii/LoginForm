import { Component } from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik'

import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components';

const ErrorText = styled.p`
color: red;
`;

const FormBox = styled.form`
color: white;
font-size: 18px;
border: 1px solid ;
width:450px;
text-align:center;
margin-top: 24px;
margin-left:auto;
margin-right:auto;
padding-top: 16px;
padding-bottom: 16px;
box-shadow: 0px 4px 10px 4px #9e9e9e;
background-color:  #c9d6ff;
`;

const Button = styled.button`
padding: 5px 10px;
font-size: 16px;
color: #c9d6ff;
text-align: center;
background-color: white;
border:none;

:hover{
    background-color:  #c9d6ff;
    border: 1px solid white;
    color: white;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
}
`;

const FormError = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render={message => <ErrorText>{message}</ErrorText>}
        />
    )
}

const products = ['Sweater', 'Keyboard', 'Sofa', 'Freezer'];

const validationSchema = Yup.object({
    product: Yup.string().required('Please select a product').oneOf(products),
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    title: Yup.string().required(),
    review: Yup.string().required(),
    rating: Yup.number().min(1).max(10).required(),
    date: Yup.date().default(() => new Date()),
    wouldRecommend: Yup.boolean().default(false),
});

const initialValues = {
    name: '',
    email: '',
    title: '',
    review: '',
    rating: '',
    date: new Date(),
    wouldRecommend: false,
    product: '',
};

export class ProductReviewForm extends Component {
    handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    }

    render() {
        return ( 

            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={this.handleSubmit}>
                
                
                <FormBox autoComplete='off'>
                    
                <div>
                    <label htmlFor='name'>Full name</label>
                    <div>
                        <Field name='name' type='text' placeholder='Full name' />
                        <FormError name='name' />
                    </div>
                </div>

                <div>
                    <label htmlFor='email'>Email address</label>
                    <div>
                        <Field name='email' type='text' placeholder='Full name' />
                        <FormError name='email' />
                    </div>
                </div>

                <div>
                    <label htmlFor='product'>Product</label>
                    <div>
                        <Field name='product' as='select'>
                            <option value="">Select a product</option>
                            {products.map((product, idx) => (
                                <option value={product} key={idx}>
                                    {product}
                                </option>
                            ))}
                        </Field>
                        <FormError name='product' />
                    </div>
                </div>
                    
                <div>
                    <label htmlFor='title'>Title</label>
                    <div>
                        <Field name='title' type='text' placeholder='Title' />
                        <FormError name='title' />
                    </div>
                </div>
                    
                <div>
                    <label htmlFor='review'>Review</label>
                    <div>
                        <Field name='review' as='textarea' placeholder='Review' />
                        <FormError name='review' />
                    </div>
                </div>
                    
                <div>
                    <label htmlFor='rating'>Rating</label>
                    <div>
                        <Field name='rating' type='number' placeholder='Rating' />
                        <FormError name='rating' />
                    </div>
                </div>
                    
                <div>
                    <div>
                        <label htmlFor='wouldRecommend'>
                        <Field name='wouldRecommend' type='checkbox'/>
                        Would Recommend
                        </label>
                    
                    </div>
                    </div>
                    
                    <Button type='submit'>Submit</Button>
                </FormBox>
            </Formik>
            )
    }
    }