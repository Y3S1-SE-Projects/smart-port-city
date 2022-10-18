import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import Footer from "../components/Footer";

// Validation using the Yup object out of the box methods
const validationSchema = Yup.object({
  topic: Yup.string()
    .typeError("Please enter only letters in the feild")
    .max(25, "Maximum character limit (25) reached !")
    .required("topic is required"),
  description: Yup.string()
    .typeError("Please enter only letters in the feild")
    .max(50, "Maximum character limit (50) reached !")
    .required("Description is required"),
  postCategory: Yup.string().required("PostCategory is required"),
  date: Yup.date()
    .min("10/22/2022", "Date annot be in the past")
    .max("10/22/2050", "Unavailable, please select a year less than 2050 !")
    .required("Date is required"),
  price: Yup.number()
    .typeError("Please enter only numbers in the feild")
    .positive("Please enter only positive integer numbers")
    .min(1000, "Minimum is Rs/- 1000")
    .max(10000, "Maximum is Rs/- 10000")
    .required("Price is required"),
  cardno: Yup.number()
    .typeError("Please enter only numbers in the feild")
    .positive("Please enter only positive integer numbers")
    .min(123456789012, "CVV must be 3 digits")
    .max(210987654321, "CVV must be 3 digits")
    .required("Card Number is required"),
  cvv: Yup.number()
    .typeError("Please enter only numbers in the feild")
    .positive("Please enter only positive integer numbers")
    .min(100, "CVV must be 3 digits")
    .max(999, "CVV must be 3 digits")
    .required("CVV is required"),
});

const CreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div class="d-flex justify-content-center p-5">
        <Formik
          initialValues={{
            topic: "",
            description: "",
            postCategory: "",
            date: "",
            price: "",
            cardno: "",
            cvv: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            console.log(values);
            await axios
              .post("http://localhost:8000/post/save", values)
              .then((res) => {
                localStorage.setItem("authToken", res.data.token);
                localStorage.setItem("userRole", res.data.user.role);
                setIsLoading(false);
                if (res.data.user.role === "customer") {
                  window.location = `/customer`;
                }
              })
              .catch((err) => {
                alert("Payment is successfully added!");
                window.location = "/";
              });
          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setIsLoading(true);
                handleSubmit();
              }}
            >
              <div
                className="form-group"
                style={{ marginBottom: "15px", marginTop: "40px", width: 1000 }}
              >
                <label style={{ marginBottom: "5px" }}>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="topic"
                  id="topic"
                  placeholder="Enter Topic"
                  onChange={handleChange("topic")}
                  value={values.topic}
                />
                <div style={{ font: 12, color: "red" }}>
                  {errors.topic && touched.topic ? (
                    <div>{errors.topic}</div>
                  ) : null}
                </div>
              </div>
              <div
                className="form-group"
                style={{ marginBottom: "15px", width: 1000 }}
              >
                <label style={{ marginBottom: "5px" }}>Sporting Event</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  id="description"
                  placeholder="Enter Description"
                  onChange={handleChange("description")}
                  value={values.description}
                />
                <div style={{ font: 12, color: "red" }}>
                  {errors.description && touched.description ? (
                    <div>{errors.description}</div>
                  ) : null}
                </div>
              </div>
              <div
                className="form-group"
                style={{ marginBottom: "15px", width: 1000 }}
              >
                <label style={{ marginBottom: "5px" }}>Type of Sport</label>
                <select
                  type="text"
                  className="form-control"
                  name="postCategory"
                  id="postCategory"
                  onChange={handleChange("postCategory")}
                  value={values.postCategory}
                >
                  <option selected="selected" value="badminton">
                    Badminton
                  </option>
                  <option value="karate">Karate</option>
                  <option value="basketball">Basketball</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Chess">Chess</option>
                  <option value="Esports">Esports</option>
                </select>
                <div style={{ font: 12, color: "red" }}>
                  {errors.postCategory && touched.postCategory ? (
                    <div>{errors.postCategory}</div>
                  ) : null}
                </div>
              </div>
              <div
                className="form-group"
                style={{ marginBottom: "15px", width: 1000 }}
              >
                <label style={{ marginBottom: "5px" }}>Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  id="date"
                  placeholder="Enter Date"
                  onChange={handleChange("date")}
                  value={values.date}
                />
                <div style={{ font: 12, color: "red" }}>
                  {errors.date && touched.date ? (
                    <div>{errors.date}</div>
                  ) : null}
                </div>
              </div>
              <div
                className="form-group"
                style={{ marginBottom: "15px", width: 1000 }}
              >
                <label style={{ marginBottom: "5px" }}>Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  id="price"
                  placeholder="Enter Price"
                  onChange={handleChange("price")}
                  value={values.price}
                />
                <div style={{ font: 12, color: "red" }}>
                  {errors.price && touched.price ? (
                    <div>{errors.price}</div>
                  ) : null}
                </div>
              </div>
              <div
                className="form-group"
                style={{ marginBottom: "15px", width: 1000 }}
              >
                <label style={{ marginBottom: "5px" }}>Card No</label>
                <input
                  type="text"
                  className="form-control"
                  name="cardno"
                  id="cardno"
                  placeholder="Enter Card Number"
                  onChange={handleChange("cardno")}
                  value={values.cardno}
                />
                <div style={{ font: 12, color: "red" }}>
                  {errors.cardno && touched.cardno ? (
                    <div>{errors.cardno}</div>
                  ) : null}
                </div>
              </div>
              <div
                className="form-group"
                style={{ marginBottom: "15px", width: 1000 }}
              >
                <label style={{ marginBottom: "5px" }}>CVV</label>
                <input
                  type="text"
                  className="form-control"
                  name="cvv"
                  id="cvv"
                  placeholder="Enter CVV"
                  onChange={handleChange("cvv")}
                  value={values.cvv}
                />
                <div style={{ font: 12, color: "red" }}>
                  {errors.cvv && touched.cvv ? <div>{errors.cvv}</div> : null}
                </div>
              </div>
              <button
                className="btn btn-success"
                type="submit"
                style={{ marginTop: "15px" }}
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
              </button>
            </form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
};

export default CreatePost;
