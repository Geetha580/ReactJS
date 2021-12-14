import React, { Component } from "react";
import axios from "axios";
class GetBill extends React.Component {
  state = {
    gasBooking: {},
    customerId: "",
  };
  handleChange = (event) => {
    // copy state student object to local variable student
    //const gasbooking = { ...this.state.gasbooking };

    // update local student object with values entered by user
    //gasbooking[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ customerId: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    axios
      .get(`http://localhost:8080/gasbooking/getbill/${this.state.customerId}`)
      .then((res) => {
        console.log(res);
        this.setState({ gasBooking: res.data });
       alert("the bill amount of the customer id"+this.state.customerId+"is"+this.state.gasBooking.bill)
      })
      .catch((err) => console.log(err));
  };
  render() {
      const customerId=this.state.customerId;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
            <div className="mb-3">
                <h3>enter customer id</h3>
            <label htmlFor="customerId" className="form-label">
              CustomerId
            </label>
            <input
              type="number"
              className="form-control"
              id="customerId"
              aria-describedby="emailHelp"
              value={customerId}
              name="customerId"
              onChange={this.handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <table className="table table-dark  w-75 mx-auto">

            <tbody>           
             <tr >
              <th>gID   </th>
              <td>{this.state.gasBooking.gasBookingId}</td>
            </tr>
            <tr>
              <th>Localdate</th>
              <td>{this.state.gasBooking.localDate}</td>
            </tr>
            <tr>
              <th>status </th>
              <td>{this.state.gasBooking.status}</td>
            </tr>
            <tr>
               <th>bill  </th>
               <td>{this.state.gasBooking.bill}</td>
            </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default GetBill;
