import React, { useReducer, useState } from 'react'
import { MyProvider } from './context'
import MyForm from './MyForm'
import MyTable from './MyTable'

function MainApp() {

    //!======================== initial data (hardcoded) ============================
    const [data, setdata] = useState([
        {
            name: "Ankit",
            email: "ankitkerketta@gmail.com"
        }
    ])
    const [selectedUser, setselectedUser] = useState([]);
    const [selectedindex, setselectedindex] = useState("")
    const [editVal, seteditVal] = useState("")

    //!======================== reducer function ============================
    const reducer = (prevState, action) => {
        switch (action.type) {

//*================================ ⬇ CRUD OPERATION ⬇ ====================================
            //?======================== CREATE✍ ============================
            case "add":
                const dataAddCopy = [...prevState]
                dataAddCopy.push(action.payload)
                return dataAddCopy;

                //?======================== READ📖 ============================
            case 'read':
                setselectedUser(action.payload)
                setselectedindex(action.index)
                seteditVal(action.editVal)
                const dataCopy3 = [...prevState]
                return dataCopy3

            //?======================== UPDATE📝 ============================        
            case "update":
                const data1 = [...prevState]
                data1.splice(selectedindex, 1, action.payload)
                seteditVal(false)
                return data1

            //?======================== DELETE❌ ============================
            case 'delete':
                const dataDeleteCopy = [...prevState]
                dataDeleteCopy.splice(action.payload, 1)
                return dataDeleteCopy
            default:
                return prevState;
        }
    }
//*================================ ⬆ CRUD OPERATION ⬆ ====================================

    //!======================== usereducer Hook ============================
    const [state, dispatch] = useReducer(reducer, data)

    //?========================  return ============================
    return (
        <div>
            <MyProvider value={{ state: state, dispatch: dispatch, selectedUser: selectedUser, selectedindex: selectedindex, editVal }}>
                <MyForm />
                <hr />
                <hr />
                <MyTable />
            </MyProvider>

        </div>
    )
}

export default MainApp
