import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap'
import MyContext from './context';

function MyTable() {

    const data = useContext(MyContext);

    const deleteUser = (id) => {
        data.dispatch({ type: 'delete', payload: id })
    }

    const editUser = (value, id) => {

        data.dispatch({ type: 'read', payload: value, index: id, editVal: true })
    }
    return (
        <div>
            <Table className='shadow rounded bg-info text-white' size="lg" style={{ width: "600px" }} bordered hover>
                <thead className=''>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                </thead>
                {data.state.map((val, index) => {
                    return <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td><Button variant='success' onClick={() => editUser(val, index)}>Edit</Button></td>
                            <td><Button variant='danger' onClick={() => deleteUser(index)}>Delete</Button></td>
                        </tr>
                    </tbody>
                })}
            </Table>

        </div>
    )
}

export default MyTable
