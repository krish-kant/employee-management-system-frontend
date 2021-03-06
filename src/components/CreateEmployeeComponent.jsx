import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };

    // this.firstNameHandler = this.firstNameHandler.bind(this);
    // this.lastNameHandler = this.lastNameHandler.bind(this);
    // this.emailIdHandler = this.emailIdHandler.bind(this);
    // this.saveEmployeeHandler = this.saveEmployeeHandler.bind(this);
    // this.cancelHandler = this.cancelHandler.bind(this);
  }
  firstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  lastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  emailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  saveEmployeeHandler = (event) => {
    event.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log(JSON.stringify(employee));

    EmployeeService.createEmployee(employee).then((response) => {
      this.props.history.push("/employees");
    });
  };

  cancelHandler = (event) => {
    this.props.history.push("/employees");
  };

  render() {
    return (
      <div>
        <br />
        <div className="App-CreateEmployeeComponent">
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                {/* <div class="card-header text-center">Add Employee</div> */}
                <br />
                <h1 className="text-center">Add Employee</h1>
                <div className="card-body"></div>
                <form>
                  <div className="form-group"><label>First Name:</label>
                    <input placeholder="First Name"
                      name="firstName" className="form-control" value={this.state.firstName}
                      onChange={this.firstNameHandler}
                    />
                  </div>
                  <div className="form-group"><label>Last Name:</label>
                    <input placeholder="Last Name"
                      name="lastName" className="form-control" value={this.state.lastName}
                      onChange={this.lastNameHandler} />
                  </div>
                  <div className="form-group"><label>Email Address:</label>
                    <input placeholder="Email Address"
                      name="emailId" className="form-control" value={this.state.emailId}
                      onChange={this.emailIdHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.saveEmployeeHandler}>Save</button>
                  <button className="btn btn-danger" onClick={this.cancelHandler} style={{ marginLeft: "10px" }}>Cancel</button>
                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;
