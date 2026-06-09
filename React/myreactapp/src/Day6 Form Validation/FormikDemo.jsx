import React from 'react'
import { Formik, form} from 'formik';
import { handleSubmit, handleChange, values} from 'formik';

export default function FormikDemo() {
  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validate={(values) => {
          const errors = {};
            if (!values.name) {
                errors.name = "Name is required";
            }
            else if (values.name.length < 2) {
                errors.name = "Name must be at least 2 characters";
            }
            if (!values.email) {
                errors.email = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = "Enter a valid email";
            }
            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length < 6) {
                errors.password = "Password must be at least 6 characters";
            }
            return errors;
        }}
        onSubmit={(values) => {
          alert("Form submitted successfully!");
          console.log(values);
        }}>
        {({ values, handleChange, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
            <label>Name:</label><br />
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            /><br />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            <label>Email:</label><br />
            <input
              type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
            /><br />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            /><br />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            <button type="submit" className='btn btn-primary mt-2'>Submit</button>
        </form>)}
        </Formik>
    </div>
  )
}
