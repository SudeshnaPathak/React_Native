import { Formik, Field, ErrorMessage, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function VisitorAppointmentForm2() {

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
    <div className='container mt-4 mb-4 p-4 bg-light border rounded shadow' style={{maxWidth:'700px'}}>
      <h2 className='mb-4 fw-bold'>Visitor Appointment Form</h2>
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
        <Form style={{margin:'15px', maxWidth:'600px'}}>
            <div className='mb-3'>
            <label className='fw-bold form-label'>Visitor Name: </label>
            <Field type="text" name="visitorName" className="form-control"/>
            <ErrorMessage name="visitorName" component="div" style={{ color: "red"}} />
            </div>
             
            <div className='mb-3'>
            <label className='fw-bold form-label'>Email: </label>
            <Field type="email" name="email" className="form-control"/>
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div className='mb-3'>
            <label className='fw-bold form-label'>Mobile Number: </label>
            <Field type="text" name="mobileNumber" className="form-control" />
            <ErrorMessage name="mobileNumber" component="div" style={{ color: "red" }} />
            </div>

            <div className='mb-3'>
            <label className='fw-bold form-label'>Department to Visit: </label>
            <Field name='departmentToVisit' as="select" className="form-select">
              <option value="">--Select Department</option>
              <option value="hr">HR</option>
              <option value="engineering">Engineering</option>
              <option value="finance">Finance</option>
              <option value="admin">Admin</option>
            </Field>
            <ErrorMessage name="departmentToVisit" component="div" style={{ color: "red" }} />
            </div>

            <div className='mb-3'>
            <label className='fw-bold form-label'>Visit Date: </label>
            <Field name="visitDate" type="date" className="form-control"/>
            <ErrorMessage name="visitDate" component="div" style={{ color: "red" }} />
            </div>

            <div className='mb-3'>
            <label className='fw-bold form-label'>Purpose of Visit: </label>
            <Field name="purposeOfVisit" as="textarea" className="form-control"/>
            <ErrorMessage name="purposeOfVisit" component="div" style={{ color: "red" }} />
            </div>

            <div className='form-check mb-3'>
            <label className='fw-bold form-label'>Visitor Type: </label><br />
            <Field type="radio" name="visitorType" value="interviewCandidate" className="form-check-input"/> Interview Candidate
            <br />
            <Field type="radio" name="visitorType" value="vendor" className="form-check-input" /> Vendor
            <br />
            <Field type="radio" name="visitorType" value="guest" className="form-check-input" /> Guest
            <ErrorMessage name="visitorType" component="div" style={{ color: "red" }} />
            </div>

            <div className='form-check mb-3'>
            <label className='fw-bold form-label'>
                <Field type="checkbox" name="needParking" className="form-check-input" /> Need Parking?
            </label>
            </div>

            <div className='form-check mb-3'>
            <label className='fw-bold form-label'>
                <Field type="checkbox" name="acceptTerms" className="form-check-input"/> I accept the terms and conditions
            </label>
            <ErrorMessage name="acceptTerms" component="div" style={{ color: "red" }} />
            </div>
            <button type="submit" className='btn btn-success mt-2'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
