import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function VisitorAppointmentForm() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const validationSchema = Yup.object().shape({
    visitorName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),
    departmentToVisit: Yup.string()
      .required("Please select a department"),
    visitDate: Yup.date()
      .typeError("Please select a valid visit date")
      .min(today, "Visit date cannot be in the past")
      .required("Please select a visit date"),
    purposeOfVisit: Yup.string()
      .min(10, "Purpose must be at least 10 characters")
      .required("Purpose of visit is required"),
    visitorType: Yup.string()
      .required("Please select a visitor type"),
    needParking: Yup.boolean(),
    acceptTerms: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
  });

  return (
    <div>
      <Formik
        initialValues={{ 
            visitorName: '', 
            email: '',
            mobileNumber: '',
            departmentToVisit: '',
            visitDate: '',
            purposeOfVisit: '',
            visitorType: '',
            needParking: false,
            acceptTerms: false
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
            alert("Appointment booked successfully!");
            console.log(values);
            resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
        <form onSubmit={handleSubmit} style={{margin:'15px'}}>
            <label>Visitor Name: </label>
            <input
              type="text"
              name="visitorName"
              value={values.visitorName}
              onChange={handleChange}
              onBlur={handleBlur} />
            {touched.visitorName && errors.visitorName && <p style={{ color: "red" }}>{errors.visitorName}</p>}
            <br /><br />

            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur} />
            {touched.email && errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
           <br /><br />

            <label>Mobile Number: </label>
            <input
             type="text"
             name="mobileNumber"
             value={values.mobileNumber}
             onChange={handleChange}
             onBlur={handleBlur} />
            {touched.mobileNumber && errors.mobileNumber && <p style={{ color: "red" }}>{errors.mobileNumber}</p>}
            <br /><br />

            <label>Department to Visit: </label>
            <select
              name='departmentToVisit'
              value={values.departmentToVisit}
              onChange={handleChange}
              onBlur={handleBlur}>
              <option value="">--Select Departmant</option>
              <option value="hr">HR</option>
              <option value="engineering">Engineering</option>
              <option value="finance">Finance</option>
              <option value="admin">Admin</option>
            </select>
            {touched.departmentToVisit && errors.departmentToVisit && <p style={{ color: "red" }}>{errors.departmentToVisit}</p>}
            <br /><br />

            <label>Visit Date: </label>
            <input
              type="date"
              name="visitDate"
              value={values.visitDate}
              onChange={handleChange}
              onBlur={handleBlur} />
            {touched.visitDate && errors.visitDate && <p style={{ color: "red" }}>{errors.visitDate}</p>}
            <br /><br />

            <label>Purpose of Visit: </label>
            <textarea
              name= 'purposeOfVisit'
              value= {values.purposeOfVisit}
              onChange={handleChange}
              onBlur={handleBlur} />
            {touched.purposeOfVisit && errors.purposeOfVisit && <p style={{ color: "red" }}>{errors.purposeOfVisit}</p>}
            <br /><br />

            <label>Visitor Type: </label><br />
            <input 
                type="radio" 
                name="visitorType" 
                value="interviewCandidate" 
                checked={values.visitorType === 'interviewCandidate'} 
                onChange={handleChange} 
                onBlur={handleBlur} /> Interview Candidate
            <br />
            <input 
                type="radio" 
                name="visitorType" 
                value="vendor" 
                checked={values.visitorType === 'vendor'} 
                onChange={handleChange} 
                onBlur={handleBlur} /> Vendor
            <br />
            <input 
                type="radio" 
                name="visitorType" 
                value="guest" 
                checked={values.visitorType === 'guest'} 
                onChange={handleChange} 
                onBlur={handleBlur} /> Guest
            {touched.visitorType && errors.visitorType && <p style={{ color: "red" }}>{errors.visitorType}</p>}
            <br /><br />

            <label>
                <input
                    type="checkbox"
                    name="needParking"
                    checked={values.needParking}
                    onChange={handleChange}
                    onBlur={handleBlur} /> Need Parking?
            </label>
            <br /><br />

            <label>
                <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={values.acceptTerms}
                    onChange={handleChange}
                    onBlur={handleBlur} /> I accept the terms and conditions
            </label>
            {touched.acceptTerms && errors.acceptTerms && <p style={{ color: "red" }}>{errors.acceptTerms}</p>}
            <br /><br />
            <button type="submit" className='btn btn-primary mt-2'>Submit</button>
        </form> )}
      </Formik>
    </div>
  )
}
