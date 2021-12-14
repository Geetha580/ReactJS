import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class GasBooking extends React.Component {
  state = {
    gasbookings: [],
  };
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:8080/gasbooking/getAllGasBookings")
      .then((res) => {
        console.log(res);
        this.setState({ gasbookings: res.data });
      })
      .catch((err) => console.log(err));
  }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }
  handleDelete = (gasBookingId) => {
    axios
      .delete(`http://localhost:8080/gasbooking/deletebooking/${gasBookingId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const gasbookings = this.state.gasbookings.filter(
          (g) => g.gasBookingId != gasBookingId
        );
        this.setState({ gasbookings: gasbookings });
        alert(res.data.gasBookingId + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="w-75 mx-auto">
        <Link to="/gasbooking/add" className="btn btn-outline-info float-end mt-3">
          Add
        </Link>
       <Link to="/getbills" className="btn btn-outline-info float-end mt-3">
          Get Bill
         </Link>
        
        <table className="table  table-striped ">
          <thead >
            <tr className="info">
              <th>gID</th>
              <th>Localdate</th>
              <th>status</th>
              <th>bill</th>
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.gasbookings.map((g) => (
              <tr>
                <td>{g.gasBookingId}</td>
                <td>{g.localDate}</td>
                <td>{g.status}</td>
                <td>{g.bill}</td>

                <td>
                  <Link
                    to={`/gasbooking/update/${g.gasBookingId}`}
                    className="btn btn-outline-primary"
                  >
                    Update
                  </Link>
                  
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(g.gasBookingId)}
                  >
                    Delete
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GasBooking;
