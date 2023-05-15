import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addemp } from '../redux/Empreducers'

function AddEmp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [DOF, setDOF] = useState('')
  const [address, setAddress] = useState('')
  const [salary, setSalary] = useState(0)
  const [deparment, setDeparment] = useState('')

  const employees = useSelector((state) => state.employees)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //   const checkEmail = employees.find(
  //     (cureel) => cureel.email === email && employees,
  //   )
  //   const checkContact = employees.find(
  //     (cureel) => cureel.contact === parseInt(contact),
  //   )
  const handlesubmit = (e) => {
    e.preventDefault()

    if (
      !name ||
      !email ||
      !contact ||
      !DOF ||
      !address ||
      !salary ||
      !deparment
    ) {
      return toast.warning('Please fill in all fields!')
    }

    dispatch(
      addemp({
        id: employees[employees.length - 1].id + 1,
        name,
        email,
        contact,
        DOF,
        address,
        salary,
        deparment,
      }),
    )
    toast.success('Employee Details added Successfully')
    navigate('/')
  }
  return (
    <div
      className="container-fluid"
      style={{
        margin: '4rem 3rem',
        width: '95vw',
        fontSize: '1.3rem',
      }}
    >
      <div className="row">
        <div className="col-lg-12  py-3">
          <h2 className=" text-center ">Add Employee Details</h2>
        </div>
        <div className="shadow w-50 d-block mx-auto">
          <form className="mx-4" onSubmit={handlesubmit}>
            <div className="form-group my-4">
              <input
                type="text"
                placeholder="Enter  name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="email"
                placeholder="Enter  Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="contact"
                placeholder="Enter contact"
                className="form-control"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="date"
                placeholder="Enter DOB"
                className="form-control"
                value={DOF}
                onChange={(e) => setDOF(e.target.value)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="text"
                placeholder="Enter  Address"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="number"
                placeholder="Enter  salary"
                className="form-control"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="text"
                placeholder="Enter Department"
                className="form-control"
                value={deparment}
                onChange={(e) => setDeparment(e.target.value)}
              />
            </div>
            <div className="form-group my-4 w-100">
              <input
                type="submit"
                className="btn btn-success  px-5  w-100 "
                value="Add"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEmp
