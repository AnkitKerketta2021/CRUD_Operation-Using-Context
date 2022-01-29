import React, { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import MyContext from './context';

function MyForm() {

    const context = useContext(MyContext);
    const [editButton, seteditButton] = useState(false)

    const [formData, setformData] = useState({
        name: "",
        email: ""
    });
    useEffect(() => {
        setformData({
            name: context.selectedUser.name,
            email: context.selectedUser.email
        })

    }, [context.selectedUser, context.selectedIndex]);
    useEffect(() => {
        seteditButton(!editButton)
    }, [context.selectedUser])

    const inputForm = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const addUser = (event) => {
        event.preventDefault()
        context.dispatch({ type: "add", payload: formData })
        setformData(
            {
                name: "",
                email: ""
            }
        )
    }
    const editUser = (event) => {
        event.preventDefault()
        context.dispatch({ type: "update", payload: formData })
        setformData(
            {
                name: "",
                email: ""
            }
        )
    }


    return (
        <div>
            <Form size="md" style={{ width: "400px" }} className='bg-light rounded shadow p-3 mt-4 m-2'>
                <Form.Control name="name"
                    value={formData.name}
                    onChange={inputForm}
                    className='mb-3' size="md" style={{ width: "300px" }} type="text" placeholder="Enter Your Name" />
                <Form.Control name="email"
                    value={formData.email}
                    onChange={inputForm}
                    className='mb-3' size="md" style={{ width: "300px" }} type="text" placeholder="Enter Your Email" />
                {/* <Button className='' type>Submit</Button> */}
                {!(context.editVal) ? <Button variant='primary' type onClick={addUser}>Add User</Button> : <Button variant='success' type onClick={editUser}>Edit User</Button>}
            </Form>
        </div>
    )
}
export default MyForm
