import React, { Component } from "react";
import axios from "axios";
class UpdateGasBooking extends React.Component {
  state = {
    gasbooking: {
      customerId: "",
      status:"booked",
      bill: "950",
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/gasbooking/getGasBookingById/${this.props.match.params.gasBookingId}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ gasbooking: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    // copy state student object to local variable student
    const gasbooking = { ...this.state.gasbooking };

    // update local student object with values entered by user
    gasbooking[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ gasbooking: gasbooking });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    axios
      .put(
        `http://localhost:8080/gasbooking/updatebooking/${this.props.match.params.gasBookingId}`,
        this.state.gasbooking
      )
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated gasbooking " +
            this.state.gasbooking.gasBookingId +
            " successfully!"
        );
        this.props.history.push("/gasbookings");
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { customerId,status,bill } = this.state.gasbooking;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
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
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Booking status
            </label>
            <input
              type="text"
              className="form-control"
              id="status"
              aria-describedby="emailHelp"
              value={status}
              name="status"
              onChange={this.handleChange}
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bill" className="form-label">
              Bill Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="bill"
              aria-describedby="emailHelp"
              value={bill}
              name="bill"
              onChange={this.handleChange}
              disabled
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateGasBooking;
