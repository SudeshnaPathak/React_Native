import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateEmployeeStatus } from '../Redux/EmployeeSlice';

export default function EmployeeList() {
  const dispatch = useDispatch();
  const {allEmployees , activeFilter } = useSelector((state) => state.employees);
  const filteredEmployees = React.useMemo(() => {
    return activeFilter === 'All' ? allEmployees : allEmployees.filter((employee) => employee.status === activeFilter);
  }, [activeFilter, allEmployees]);
  return (
    <div>
       <h3>Employee List</h3>
         {filteredEmployees.length === 0 ? (
            <p className='text-center'>No employees found.</p>
            ) : (
           <table className='table table-striped table-hover' style={{ maxHeight: '500px', overflowY: 'auto', width: '100%' , tableLayout: 'fixed'}}>
            <thead>
              <tr>
                <th className='w-100'>Name</th>
                <th className='w-100'>Team</th>
                <th className='w-100'>Status</th>
                <th className='w-100'>Actions</th>
            </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.team}</td>
                  <td>
                    <span className={'badge rounded-pill px-3 py-2 ' + (employee.status === 'Going' ? 'bg-success' : employee.status === 'Not Going' ? 'bg-danger' : 'bg-warning text-dark')}
                     style= {{ width: '80px'}}>
                      {employee.status}
                    </span>
                  </td>
                  <td>
                      <button
                        onClick={() => dispatch(updateEmployeeStatus({ id: employee.id, status: 'Going' }))}
                        className='btn btn-outline-success btn-sm me-2'
                        style = {{width: '90px'}}
                      >
                        Going
                        </button>
                        <button
                        onClick={() => dispatch(updateEmployeeStatus({ id: employee.id, status: 'Not Going' }))}
                        className='btn btn-outline-danger btn-sm'
                        style = {{width: '90px'}}
                        >
                        Not Going
                        </button>
                    </td>
                </tr>
              ))}
            </tbody>
            </table>
            )}
    </div>
  )
}
