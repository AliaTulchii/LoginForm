import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().min(6).max(20).required(),
})

const initialValues = {
    login: '',
    password: '',
}

export const LoginForm = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        resetForm();
    }
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}>
        <Form autoComplete="off">
            <label htmlFor="login">
                Login
                    <Field type="text" name="login" />
                    <ErrorMessage name="login" component="div"/>
            </label>
            <label htmlFor="password">
                Password
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div"/>
            </label>
            <button type="submit">Submit</button>
            </Form>
            </Formik>
    )
}