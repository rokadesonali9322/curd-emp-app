import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmp } from '../redux/Empreducers'
import { toast } from 'react-toastify'

function Home() {
  const employees = useSelector((state) => state.employees)
  // console.log(employees)
  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(deleteEmp({ id: id }))
    toast.warning('delete suceesullfily')
  }
  return (
    <div className="container-fluid main">
      <div className="row">
        <div className="col-lg-12  d-block m-auto ">
          <Link to="/addemp" className="btn btn-success float-end px-3 m-5">
            Add Employee
          </Link>
        </div>
        <div className="col-lg-12 d-block m-auto">
          <table className="table table-hover ">
            <thead className="text-white bg-secondary text-center">
              <tr>
                <th>Sr.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>DOF</th>
                <th>Address</th>
                <th>Salary</th>
                <th>Deparment</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => {
                return (
                  <tr className="text-center" key={index}>
                    <td>{emp.id}</td>
                    {/* {console.log(id)} */}
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.contact}</td>
                    <td>{emp.DOF}</td>
                    <td>{emp.address}</td>
                    <td>{emp.salary}</td>
                    <td>{emp.deparment}</td>
                    <td>
                      <Link
                        to={`/edit/${emp.id}`}
                        className="btn btn-small btn-primary mx-3"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-small btn-danger mx-3"
                        onClick={() => handleClick(emp.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
