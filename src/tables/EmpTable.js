import React from 'react'

const EmpTable = props => (
    <table>
        <thead>
            <tr>
                <th>Emp ID</th>
                <th>Emp Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.emps.length > 0 ? (
                props.emps.map(emp => (
                    <tr key={emp.id}>
                        <td>{emp.empid}</td>
                        <td>{emp.empname}</td>
                        <td>
                            <button className="button"  onClick={() => props.editRow(emp)}>Edit</button>
                            <button className="button" onClick={() => props.deleteEmp(emp.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>No Employees Added </td>
                    </tr>
                )}
        </tbody>
    </table>
)



export default EmpTable