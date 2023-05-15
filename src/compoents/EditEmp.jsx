import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateemp } from '../redux/Empreducers'

const EditEmp = () => {
  const { id } = useParams()
  const employees = useSelector((state) => state.employees)

  const existemp = employees.filter((ele) => ele.id == id)
  console.log(existemp)

  const { name, email, contact, DOF, address, salary, deparment } = existemp[0]
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [ename, setEname] = useState(name)
  const [eemail, setEemail] = useState(email)
  const [econtact, setEcontact] = useState(contact)
  const [eDOF, setEDOF] = useState(DOF)
  const [eaddress, setEaddress] = useState(address)
  const [esalary, setEsalary] = useState(salary)
  const [edeparment, setEDeparment] = useState(deparment)

  const handlesubmit = (e) => {
    e.preventDefault()
    dispatch(
      updateemp({
        id: id,
        name: ename,
        email: eemail,
        contact: econtact,
        DOF: eDOF,
        address: eaddress,
        salary: esalary,
        deparment: edeparment,
      }),
    )
    toast.success('Updated succesfully')
    navigate('/')
  }
  return (
    <div className="container-fluid main">
      <div className="row">
        <div className="col-lg-12  py-3">
          <h2 className=" text-center">Update Employee Details</h2>
        </div>
        <div className="shadow w-50 d-block mx-auto">
          <form className="mx-4" onSubmit={handlesubmit}>
            <div className="form-group my-4">
              <input
                type="text"
                placeholder="Enter  name"
                className="form-control"
                value={ename}
                onChange={(e) => setEname(e.target.value)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="email"
                placeholder="Enter  Email"
                className="form-control"
                value={eemail}
                onChange={(e) => setEemail(e.target.value)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="contact"
                placeholder="Enter contact"
                className="form-control"
                value={econtact}
                onChange={(e) => setEcontact(e.target.value)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="date"
                placeholder="Enter DOB"
                className="form-control"
                value={eDOF}
                onChange={(e) => setEDOF(e.target.value)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="text"
                placeholder="Enter  Address"
                className="form-control"
                value={eaddress}
                onChange={(e) => setEaddress(e.target.value)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="number"
                placeholder="Enter  salary"
                className="form-control"
                value={esalary}
                onChange={(e) => setEsalary(e.target.value)}
              />
            </div>
            <div className="form-group my-4">
              <input
                type="text"
                placeholder="Enter Department"
                className="form-control"
                value={edeparment}
                onChange={(e) => setEDeparment(e.target.value)}
              />
            </div>
            <div className="form-group my-4 w-100">
              <input
                type="submit"
                className="btn btn-success  px-5 mx-2"
                value="Update"
              />
              <Link to="/" className="btn btn-danger float-end mx-3">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditEmp
