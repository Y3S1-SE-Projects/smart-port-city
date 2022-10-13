import React, { Component } from "react";
import axios from "axios";
import Footer from "../components/Footer";

const initialState = {
  namerr: "",
  descriptionerr: "",
  postCategoryerr: "",
  dateerr: "",
  priceerr: "",
  cardnoerr: "",
  cvverr: "",
};

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      description: "",
      postCategory: "",
      date: "",
      price: "",
      cardno: "",
      cvv: "",
    };
  }

  state = initialState;

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  // Validation function
  validate = () => {
    let namerr = "";
    let descriptionerr = "";
    let postCategoryerr = "";
    let dateerr = "";
    let priceerr = "";
    let cardnoerr = "";
    let cvverr = "";

    // error states
    if (!this.state.topic) {
      namerr = "Name cannot be blank";
    }
    if (!this.state.description) {
      descriptionerr = "Sport Event cannot be blank";
    }
    if (!this.state.postCategory) {
      postCategoryerr = "Type of sport cannot be blank";
    }
    if (!this.state.date) {
      dateerr = "Date cannot be blank";
    }
    if (!this.state.price) {
      priceerr = "Price cannot be blank";
    }
    // if(this.state.price != "[0-9]{10}") {
    //   priceerr = "Please enter only numbers";
    // }
    if (!this.state.cardno) {
      cardnoerr = "Card Number cannot be blank";
    }
    // if(this.state.cardno != /^\d{12}$/) {
    //   cardnoerr = "Please enter your 12 digit credit card number correctly";
    // }
    if (!this.state.cvv) {
      cvverr = "CVV cannot be blank";
    }
    // if(this.state.cvv != /^\d{3}$/) {
    //   cvverr = "Please enter your 3 digit cvv correctly";
    // }

    if (
      namerr ||
      descriptionerr ||
      postCategoryerr ||
      dateerr ||
      priceerr ||
      cardnoerr ||
      cvverr
    ) {
      this.setState({
        namerr,
        descriptionerr,
        postCategoryerr,
        dateerr,
        priceerr,
        cardnoerr,
        cvverr,
      });
      return false;
    }

    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { topic, description, postCategory, date, price, cardno, cvv } =
      this.state;
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      // clear form
      this.setState(initialState);
    }

    const data = {
      topic: topic,
      description: description,
      postCategory: postCategory,
      date: date,
      price: price,
      cardno: cardno,
      cvv: cvv,
    };

    console.log(data);

    axios
      .post("https://smart-port-city-fullstack.herokuapp.com/post/save", data)
      .then((res) => {
        if (res.data.success) {
          alert("Record Saved Successfully");
          this.setState({
            topic: "",
            description: "",
            postCategory: "",
            date: "",
            price: "",
            cardno: "",
            cvv: "",
          });
        }
      });
  };

  render() {
    return (
      <>
        <div className="tablebg">
          <div className="col-md-8 mt-4 mx-auto">
            <h1
              className="h3 mb-3 font-weight-normal"
              style={{ marginTop: "8%", paddingTop: "50px" }}
            >
              Purchase a new ticket
            </h1>
            <form className="needs-validation">
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="topic"
                  placeholder="Enter Topic"
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                />
                <div style={{ font: 12, color: "red" }}>
                  {this.state.namerr}
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Sporting Event</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Enter Topic"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />
                <div style={{ font: 12, color: "red" }}>
                  {this.state.descriptionerr}
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Type of Sport</label>
                <input
                  type="text"
                  className="form-control"
                  name="postCategory"
                  placeholder="Enter Sport"
                  value={this.state.postCategory}
                  onChange={this.handleInputChange}
                />
                <div style={{ font: 12, color: "red" }}>
                  {this.state.postCategoryerr}
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Date</label>
                <input
                  type="text"
                  className="form-control"
                  name="date"
                  placeholder="Enter Date"
                  value={this.state.date}
                  onChange={this.handleInputChange}
                />
                <div style={{ font: 12, color: "red" }}>
                  {this.state.dateerr}
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  placeholder="Enter Price"
                  value={this.state.price}
                  onChange={this.handleInputChange}
                />
                <div style={{ font: 12, color: "red" }}>
                  {this.state.priceerr}
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Card No</label>
                <input
                  type="text"
                  className="form-control"
                  name="cardno"
                  placeholder="Enter Card Number"
                  s
                  value={this.state.cardno}
                  onChange={this.handleInputChange}
                />
                <div style={{ font: 12, color: "red" }}>
                  {this.state.cardnoerr}
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>CVV</label>
                <input
                  type="text"
                  className="form-control"
                  name="cvv"
                  placeholder="Enter CVV"
                  value={this.state.cvv}
                  onChange={this.handleInputChange}
                />
                <div style={{ font: 12, color: "red" }}>
                  {this.state.cvverr}
                </div>
              </div>
              <button
                className="btn btn-success"
                type="submit"
                style={{ marginTop: "15px" }}
                onClick={this.onSubmit}
              >
                <i className="far fa-check-square"></i>
                &nbsp; Pay Now
              </button>
              <button
                className="btn btn-primary"
                style={{ marginLeft: "10px", marginTop: "15px" }}
              >
                <a
                  href="/table"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Back
                </a>
              </button>{" "}
            </form>
          </div>
          <Footer />
        </div>{" "}
      </>
    );
  }
}
