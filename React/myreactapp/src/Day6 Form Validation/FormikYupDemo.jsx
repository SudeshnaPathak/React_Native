import React from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';

export default function FormikYupDemo() {

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Name must be at least 2 characters")
            .required("Name is required"),
        email: Yup.string()
            .email("Enter a valid email")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required")
    });

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert("Form submitted successfully!");
          console.log(values);
        }}>
        {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
        <form onSubmit={handleSubmit}>
            <label>Name:</label><br />
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            /><br />
            {touched.name && errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            <label>Email:</label><br />
            <input
              type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            /><br />
            {touched.email && errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            /><br />
            {touched.password && errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            <button type="submit" className='btn btn-primary mt-2'>Submit</button>
        </form>)}
        </Formik>
    </div>
  )
}
