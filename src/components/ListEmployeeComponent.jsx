import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  addEmployee() {
    this.props.history.push("/add-employee");
  }

  editEmployee(id) {
    this.props.history.push(`/update-employee/${id}`);

  }

  deleteEmployee(id) {
    this.props.history.push(`/employees/${id}`);
    EmployeeService.deleteEmployee(id);
    this.props.history.push("/employees");
    window.location.reload();
  }

  render() {
    return (
      <div className="App-ListEmployeeComponent">
        <h2 className="text-center">Employee List</h2>
        <div className="row"></div>
        <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
        <br />
        <br />
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td><button className="btn btn-info" onClick={() => this.editEmployee(employee.id)}>Update</button>
                    <button className="btn btn-danger" onClick={() => this.deleteEmployee(employee.id)} style={{ marginLeft: "20px" }}>Delete</button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}

export default ListEmployeeComponent;
