import React, { Component } from "react";
import axios from "axios";
import Footer from "../components/Footer";

export default class EditPost extends Component {
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

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { topic, description, postCategory, date, price, cardno, cvv } =
      this.state;

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
      .put(
        `https://smart-port-city-fullstack.herokuapp.com/post/update/${id}`,
        data
      )
      .then((res) => {
        if (res.data.success) {
          alert("Record Updated Successfully");
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

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .get(`https://smart-port-city-fullstack.herokuapp.com/post/${id}`)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            topic: res.data.post.topic,
            description: res.data.post.description,
            postCategory: res.data.post.postCategory,
            date: res.data.post.date,
            price: res.data.post.price,
            cardno: res.data.post.cardno,
            cvv: res.data.post.cvv,
          });
        }
      });
  }

  render() {
    return (
      <>
        <div className="tablebg">
          <div
            className="col-md-8 mt-4 mx-auto"
            style={{ marginBottom: "50px", marginTop: "90px" }}
          >
            <h1
              className="h3 mb-3 font-weight-normal"
              style={{ marginTop: "8%", paddingTop: "50px" }}
            >
              Edit Ticket
            </h1>
            <form className="needs-validation" noValidate>
              <div
                className="form-group"
                style={{ marginBottom: "15px", marginTop: "45px" }}
              >
                <label style={{ marginBottom: "5px" }}>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="topic"
                  placeholder="Enter Topic"
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                />
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
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Type of Sport</label>
                <input
                  type="text"
                  className="form-control"
                  name="postCategory"
                  placeholder="Enter Post Category"
                  value={this.state.postCategory}
                  onChange={this.handleInputChange}
                />
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
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Card No</label>
                <input
                  type="text"
                  className="form-control"
                  name="cardno"
                  placeholder="Enter Card Number"
                  value={this.state.cardno}
                  onChange={this.handleInputChange}
                />
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
              </div>

              <button
                className="btn btn-success"
                type="submit"
                style={{ marginTop: "15px" }}
                onClick={this.onSubmit}
              >
                <i className="far fa-check-square"></i>
                &nbsp; Update
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
              </button>
            </form>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
