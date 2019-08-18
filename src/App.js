import React, { useState } from 'react';
import EmpTable from './tables/EmpTable';
import AddEmpForm from './Forms/AddEmpForm'
import './App.css';
import EditEmpForm from './Forms/EditEmpForm';

const App = () => {
  const empsData = [
    { id: 1, empid: 123, empname: 'vijay' },
    { id: 2, empid: 124, empname: 'sachin' },
    { id: 3, empid: 111, empname: 'kumar' },
  ]

  const initialFormState = { id: null, name: '', username: '' }

  const [emps, setEmps] = useState(empsData)
  const [ currentEmp, setCurrentEmp ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)

  const addEmp = emp => {
    emp.id = emps.length + 1
    setEmps([...emps, emp])
  }

  const deleteEmp = id => {
    setEditing(false)
    setEmps(emps.filter(emp => emp.id !== id))
  }

  const editRow = emp => {
    setEditing(true)
    setCurrentEmp({ id: emp.id, empid: emp.empid, empname: emp.empname })
  }

  const updateEmp = (id, updatedEmp) => {
    setEditing(false)
    setEmps(emps.map(emp => (emp.id === id ? updatedEmp : emp)))
  }

  return (
    <div className="container">
      <h1>EMP DETAILS</h1>
      <div className="emp-details">
      {editing ? (
      <div>
      <h2>Edit Employee</h2>
      <EditEmpForm
        editing={editing}
        setEditing={setEditing}
        currentEmp={currentEmp}
        updateEmp={updateEmp}
      />
    </div>
      ): (
        <div className="emp-form">
          <h2>Add Employee</h2>
          <AddEmpForm addEmp={addEmp} />
        </div>
      )}
        <div className="emp-table">
          <h2>View Employee</h2>
          <EmpTable emps={emps} deleteEmp={deleteEmp} editRow={editRow}  />
        </div>
      </div>
    </div>
  )
}


export default App;
