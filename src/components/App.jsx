import { Component } from "react";
// import { LoginForm } from './LoginForm/LoginForm';
import {ProductReviewForm} from './ProductReviewForm/ProductReviewForm'
import styled from 'styled-components';

const ProductTitle = styled.h2`
width: 450px;
margin-left:auto;
margin-right:auto;
padding-top: 16px;
padding-bottom: 16px;
color: #c9d6ff;
text-align: center;
box-shadow: 0px 4px 10px 4px #9e9e9e;
`;

 class App extends Component {
  
  render() {
    return(
      <div>
        {/* <LoginForm/> */}

        <ProductTitle>Product Review Form</ProductTitle>

        <ProductReviewForm />
      </div>
    );
  }
  
};

export default App;
