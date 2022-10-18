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
            ></form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
};

export default CreatePost;
