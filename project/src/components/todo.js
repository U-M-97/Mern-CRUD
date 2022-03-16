import React from 'react'
import './todo.css'
import { useState,useEffect } from 'react'


const Todo = () => {

    const [records, setRecords] = useState([])
    

    const getData = async () =>{
        const res = await fetch("http://localhost:5000/display")

        const data = await res.json()
        setRecords(data)
    }

    useEffect(()=>{
        getData()
    }, [])

    const Delete = async (id)=>{
        console.log(id)
        const res = await fetch("http://localhost:5000/display/" + id, {
            method: "DELETE"
        })

        const data = await res.json()
        setRecords(records => records.filter(record => record._id !== data._id))
        
        }

        const Update = async (id) =>{
            const res = await fetch("http://localhost:5000/display/" +id, {
                method: "PUT"
            })
            const data = await res.json()
            getData()
        }

        

        

    


  return (
      <body>

          <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th></th>
                <th></th>
                
             </tr>
        </thead>

        <tbody>
           
            {records.map(record =>(
                  <tr key={record.id}>
                    <td>{record.name}</td>
                    <td>{record.email}</td>
                    <td>{record.password}</td>
                    <td><button className='editButton' onClick={() => Update(record._id)}>Edit</button></td>
                    <td><button className='deleteButton' onClick={() => Delete(record._id)}>Delete</button></td>
                  </tr>
               
               
            ))}

            
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><a className='addButton' href='/signup'>AddUser</a></td>
            </tr>
            
        </tbody>
    
    </table>    
      </body>
    
  )
}

export default Todo