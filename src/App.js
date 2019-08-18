import React, { useState } from 'react';
import EmpTable from './tables/EmpTable';
import AddEmpForm from './Forms/AddEmpForm'
import './App.css';

const App = () => {
  const empsData = [
    { id: 1, empid: 123, empname: 'vijay' },
    { id: 2, empid: 124, empname: 'sachin' },
    { id: 3, empid: 111, empname: 'kumar' },
  ]

  const [emps, setEmps] = useState(empsData)

  const addEmp = emp => {
    emp.id = emps.length + 1
    setEmps([...emps, emp])
  }

  const deleteEmp = id => {
    setEmps(emps.filter(emp => emp.id !== id))
  }

  return (
    <div className="container">
      <h1>EMP DETAILS</h1>
      <div className="emp-details">
        <div className="emp-form">
          <h2>Add Employee</h2>
          <AddEmpForm addEmp={addEmp} />
        </div>
        <div className="emp-table">
          <h2>View Employee</h2>
          <EmpTable emps={emps} deleteEmp={deleteEmp} />
        </div>
      </div>
    </div>
  )
}


export default App;
