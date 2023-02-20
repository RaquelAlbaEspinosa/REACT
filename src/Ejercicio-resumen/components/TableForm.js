import React from 'react'
import Table from 'react-bootstrap/Table';

export const TableForm = ({userList}) => {
  return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
            {userList.map((user, index) => { return(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </tr>
            )})}
            </tbody>
        </Table>
    </div>
  )
}
