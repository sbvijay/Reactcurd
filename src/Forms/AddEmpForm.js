import React, { useState } from 'react'

const AddEmpForm = props => {

    const empsData = [
        { id: 1, empid: 123, empname: 'vijay' },
        { id: 2, empid: 124, empname: 'sachin' },
        { id: 3, empid: 111, empname: 'kumar' },
    ]

    const initialFormState = { id: null, empid: '', empname: '' }
    const [emp, setEmp] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
        setEmp({ ...emp, [name]: value })
    }

    const validateNumber = event => {
        const keyCode = event.keyCode || event.which
        const string = String.fromCharCode(keyCode)
        const regex = /[0-9,]|\./
        if (!regex.test(string)) {
            event.returnValue = false
            if (event.preventDefault) event.preventDefault()
        }
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            var index = empsData.findIndex(x => x.empid == emp.empid)
            if (index === -1) {
                if (!emp.empid || !emp.empname) return
                props.addEmp(emp)
                setEmp(initialFormState)
            }
            else {
                alert("Emp id present");
            }
        }}>

            <div className="custom-input">
                <label>EmpId</label>
                <input type="text" name="empid" value={emp.empid} onChange={handleInputChange} onKeyPress={validateNumber} />
            </div>
            <div className="custom-input">
                <label>EmpName</label>
                <input type="text" name="empname" value={emp.empname} onChange={handleInputChange} />
            </div>
            <button className="custom-btn">Add New Emp </button>
        </form>
    )
}

export default AddEmpForm