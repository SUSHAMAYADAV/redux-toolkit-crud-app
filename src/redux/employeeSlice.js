import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: [],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employee = action.payload;
    },
    addEmployee: (state, action) => {
      // state.employee.push(action.payload);
      state.employee = [...state.employee, action.payload];
    },
    updateEmployee: (state, action) => {
      const { employeeid, updatedData } = action.payload;
      /*  const index = state.employee.findIndex(
        (emp) => emp.employeeid === employeeid
      );
      if (index !== -1) {
        state.employee[index] = { ...state.employee[index], ...updatedData };
      } */
      state.employee = state.employee.map((emp) =>
        emp.employeeid === employeeid ? { ...emp, ...updatedData } : emp
      );
    },
    deleteEmployee: (state, action) => {
      state.employee = state.employee.filter(
        (emp) => emp.employeeid !== action.payload
      );
    },
  },
});

export const { setEmployees, addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
