import { createSlice } from '@reduxjs/toolkit'

import Empdata from './Empdata'

const empslice = createSlice({
  name: 'employees',
  initialState: Empdata,
  reducers: {
    addemp: (state, action) => {
      //   console.log(action)
      state.push(action.payload)
    },
    updateemp: (state, action) => {
      //   console.log(action)
      const {
        id,
        name,
        email,
        contact,
        DOF,
        address,
        salary,
        deparment,
      } = action.payload
      const ee = state.find((emp) => emp.id == id)
      if (ee) {
        ee.name = name
        ee.email = email
        ee.contact = contact
        ee.DOF = DOF
        ee.address = address
        ee.salary = salary
        ee.deparment = deparment
      }
      state.push(action.payload)
    },
    deleteEmp: (state, action) => {
      const { id } = action.payload
      const ee = state.find((emp) => emp.id == id)
      if (ee) {
        return state.filter((f) => f.id !== id)
      }
    },
  },
})

export const { addemp, updateemp, deleteEmp } = empslice.actions
export default empslice.reducer
