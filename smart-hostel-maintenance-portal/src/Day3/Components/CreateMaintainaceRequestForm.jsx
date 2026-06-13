import { Formik, Field, ErrorMessage, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { getCategories } from '../Services/CategoryService';
import { createRequest } from '../Services/RequestService';
import { useAuth } from '../Context/AuthContext';

export default function CreateMaintainanceRequestForm() {
  const [category, setCategory] = React.useState([]);
  const {user} = useAuth();

  function submitRequest(values) {
    const requestData = {...values,
      "studentId": user.id,
      "studentName": user.name,
      "status": "Open",
      "createdAt": new Intl.DateTimeFormat(
      'en-CA', 
      { year: 'numeric', 
        month: '2-digit', 
        day: '2-digit'}).format(new Date())};
    alert("Request created successfully!");
    
    console.log(requestData);

    createRequest(requestData)
    .then(data => console.log("Request created:", data))
    .catch(error => console.log("Error creating request:", error));
  }

  React.useEffect(() => {
    getCategories()
    .then(data => setCategory(data))
    .catch(error => console.log(error));
  }, []);


  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, "Title must be at least 3 characters")
      .required("Title is required"),
    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
    category: Yup.string()
      .required("Category is required"),
    roomNo: Yup.string()
      .matches(/^[A-Z]-\d+$/, "Room number must be in the format A-123")
      .required("Room number is required"),
    priority: Yup.string()
      .oneOf(["Low", "Medium", "High"], "Invalid priority")
      .required("Priority is required"),
  });

  return (
    <div className='container mt-4 mb-4 p-4 bg-light border rounded shadow' style={{maxWidth:'700px'}}>
      <h2 className='mb-4 fw-bold'>Create Maintainence Request</h2>
      <Formik
        initialValues={{ 
            title: '',
            description: '',
            category: '',
            roomNo: '',
            priority: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
            submitRequest(values);
            resetForm();
        }}
      >
        <Form style={{margin:'15px', maxWidth:'600px'}}>
            <div className='mb-3'>
            <label className='fw-bold form-label'>Title: </label>
            <Field type="text" name="title" className="form-control"/>
            <ErrorMessage name="title" component="div" style={{ color: "red"}} />
            </div>
             
            <div className='mb-3'>
            <label className='fw-bold form-label'>Description: </label>
            <Field name="description" as="textarea" className="form-control"/>
            <ErrorMessage name="description" component="div" style={{ color: "red" }} />
            </div>

            <div className='mb-3'>
            <label className='fw-bold form-label'>Category: </label>
            <Field name="category" as="select" className="form-select">
              <option value="">--Select Category--</option>
              {category && category.map((cat) => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </Field>
            <ErrorMessage name="category" component="div" style={{ color: "red" }} />
            </div>

            <div className='mb-3'>
            <label className='fw-bold form-label'>Room Number: </label>
            <Field type="text" name="roomNo" className="form-control"/>
            <ErrorMessage name="roomNo" component="div" style={{ color: "red" }} />
            </div>

            <div className='mb-3'>
            <label className='fw-bold form-label'>Priority: </label>
            <Field name="priority" as="select" className="form-select">
              <option value="">--Select Priority--</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Field>
            <ErrorMessage name="priority" component="div" style={{ color: "red" }} />
            </div>

           
            <button type="submit" className='btn btn-success mt-2'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}