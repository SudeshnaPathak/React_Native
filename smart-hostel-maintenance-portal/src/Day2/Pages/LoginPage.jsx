import { Formik, Field, ErrorMessage, Form } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useAuth } from '../Context/AuthContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [loginError, setLoginError] = React.useState('')

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  function handleLogin(values, resetForm) {
    setLoginError('') 
    
    login(values.email, values.password)
      .then(() => {
        alert('Login successful!')
        resetForm() 
        navigate('/')
      })
      .catch((error) => {
        setLoginError(error.message || 'Login failed')
      })
  }

  return (
    <div className='container mt-4 mb-4 p-4 bg-light border rounded shadow' style={{maxWidth:'700px'}}>
      <h2 className='mb-4 fw-bold'>Login Page</h2>
      <Formik
        initialValues={{ 
            email: '',
            password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
            handleLogin(values, resetForm)
        }}
      >
        <Form style={{margin:'15px', maxWidth:'600px'}}>
            {loginError ? <div className="alert alert-danger">{loginError}</div> : null}
            <div className='mb-3'>
            <label className='fw-bold form-label'>email: </label>
            <Field type="text" name="email" className="form-control"/>
            <ErrorMessage name="email" component="div" style={{ color: "red"}} />
            </div>
             
            <div className='mb-3'>
            <label className='fw-bold form-label'>Password: </label>
            <Field type="password" name="password" className="form-control"/>
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>
           
            <button type="submit" className='btn btn-success mt-2'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}