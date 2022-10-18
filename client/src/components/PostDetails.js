import React, { Component } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import PDF from "./PDF";

export default class PostDetails extends Component {
  //initialize the constructor
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .get(`https://smart-port-city-prod.herokuapp.com/post/${id}`)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            post: res.data.post,
          });
        }
      });
  }

  //making the render function of the component
  render() {
    const { topic, description, postCategory, date, price, cardno, cvv } =
      this.state.post;

    return (
      <>
        <div>
          <div className="container">
            <div style={{ marginTop: "150px" }}>
              <h4>{topic}</h4>
              <hr />

              <dl className="row">
                <dt className="col-sm-3">Sporting Event</dt>
                <dd className="col-sm-9">{description}</dd>

                <dt className="col-sm-3">Type of Sport </dt>
                <dd className="col-sm-9">{postCategory}</dd>

                <dt className="col-sm-3">Date</dt>
                <dd className="col-sm-9">{date}</dd>

                <dt className="col-sm-3">Price</dt>
                <dd className="col-sm-9">{price}</dd>

                <dt className="col-sm-3">Card Number</dt>
                <dd className="col-sm-9">{cardno}</dd>

                <dt className="col-sm-3">CVV</dt>
                <dd className="col-sm-9">{cvv}</dd>
              </dl>
              <button
                className="btn btn-primary"
                style={{ marginLeft: "0px", marginTop: "15px" }}
              >
                <a
                  href="/table"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Back
                </a>
              </button>
              <PDF name={this.state.topic} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
