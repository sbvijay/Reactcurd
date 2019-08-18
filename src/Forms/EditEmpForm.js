import React, { useState,useEffect } from 'react'

const EditEmpForm = props => {
  const [emp, setEmp] = useState(props.currentEmp)


  useEffect(
    () => {
      setEmp(props.currentEmp)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target
    setEmp({ ...emp, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateEmp(emp.id, emp)
      }}
    >
    <div className="custom-input">
        <label>EmpId</label>
      <input type="text" name="empid" value={emp.empid} onChange={handleInputChange} />
    </div>
    <div className="custom-input">
        <label>EmpName</label>
        <input type="text" name="empname" value={emp.empname} onChange={handleInputChange} />
    </div>
      <button  className="custom-btn">Update Emp</button>
      <button className="custom-btn" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  )
}

export default EditEmpForm