import React, { Component } from "react";
import axios from "axios";
import Footer from "../components/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8000/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });

        console.log(this.state.posts);
      }
    });
  }

  //Delete function
  onDelete = (id) => {
    axios.delete(`http://localhost:8000/post/delete/${id}`).then((res) => {
      alert("Record Deleted Successfully");
      this.retrievePosts();
    });
  };

  //Implementing search function
  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.topic.toLowerCase().includes(searchKey) ||
        post.description.toLowerCase().includes(searchKey) ||
        post.postCategory.toLowerCase().includes(searchKey)
    );

    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/posts").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  //Displaying data to the front-end
  render() {
    return (
      <div className="tablebg">
        <div className="container" style={{ marginTop: "5%" }}>
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4 style={{ marginTop: "5%" }}>
                History of Sports Ticket Purchases
              </h4>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchQuery"
                style={{ marginTop: "14%" }}
                onChange={this.handleSearchArea}
              ></input>
            </div>
          </div>
          <table className="table table-hover" style={{ marginTop: "40px" }}>
            <thead className="thead-dark">
              <tr>
                <th scope="col">Order#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Sporting Event</th>
                <th scope="col">Type of Sport</th>
                <th scope="col">Date</th>
                <th scope="col">Price</th>
                <th scope="col">Action Buttons</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a
                      href={`/post/${posts._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {posts.topic}
                    </a>
                  </td>
                  <td>{posts.description}</td>
                  <td>{posts.postCategory}</td>
                  <td>{posts.date}</td>
                  <td>{posts.price}</td>
                  <td>
                    <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-danger"
                      href="#"
                      onClick={() => this.onDelete(posts._id)}
                    >
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-success">
            <a href="/add" style={{ textDecoration: "none", color: "white" }}>
              New Payment
            </a>
          </button>
          <button className="btn btn-primary" style={{ marginLeft: "10px" }}>
            <a
              href="/sports"
              style={{ textDecoration: "none", color: "white" }}
            >
              Back
            </a>
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}
