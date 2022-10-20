import react, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import autoTable from "jspdf-autotable";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import jsPDF from "jspdf";
import logo from "../images/logo.png";

const PostDetails = () => {
  let { id } = useParams();

  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:8000/post/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
      }
    });
  }, []);

  const pdfGenerate = (post) => {
    // var doc = new jsPDF("landscape", "px", "a4", "false");
    // doc.addImage(logo, "PNG", 65, 20, 500, 150);
    // doc.setFont("Helvertica", "Bold");
    // doc.text(60, 200, "Billing Information");
    // doc.text(
    //   60,
    //   215,
    //   "Here are your billing information for the purchase you have made in Smart Port City"
    // );
    // doc.text(
    //   60,
    //   230,
    //   "Please note that the below information is autogenertated"
    // );
    // doc.text(60, 280, `Name :                        ${post.topic}`);
    // doc.text(60, 300, `Sporting Event :         ${post.description}`);
    // doc.text(60, 320, `Sports Category :        ${post.postCategory}`);
    // doc.text(60, 340, `Date :                          ${post.date}`);
    // doc.text(60, 360, `Price :                         ${post.price}`);
    // doc.text(60, 380, `Card Number :           ${post.cardno}`);
    // doc.text(60, 400, `CVV :                        ${post.cvv}`);
    // doc.text(60, 440, "Thank you for your purchase. Please came back again !");
    // doc.save("bill.pdf");

    // Creating new PDF document instance
    const doc = new jsPDF("landscape", "px", "a4", "false");
    // Adding the logo
    doc.addImage(logo, "PNG", 65, 20, 500, 150);
    doc.setFont("rotobo", "Bold");
    doc.setFontSize(20);
    doc.text(30, 180, "Billing Information");

    doc.setFontSize(15);
    doc.text(
      30,
      210,
      "Here is the Billing information for your purchase in Smart Port City"
    );
    doc.text(
      30,
      230,
      "Please note that the below information is autogenertated"
    );
    doc.text(30, 320, "Thank you for your purchase. Please came back again !");

    // Using in built table template
    autoTable(doc, {
      startY: 260,
      head: [
        [
          "Name",
          "Sporting Event",
          "Sports Category",
          "Date",
          "Price",
          "Card Number",
          "CVV",
        ],
      ],
      body: [
        [
          `${post.topic}`,
          `${post.description}`,
          `${post.postCategory}`,
          `${post.date}`,
          `${post.price}`,
          `${post.cardno}`,
          `${post.cvv}`,
        ],
      ],
    });
    doc.save("Sports-Bill.pdf");
  };

  return (
    <>
      {post && (
        <div>
          <div className="container">
            <div style={{ marginTop: "150px" }}>
              <h4>{post.topic}</h4>
              <hr />
              <dl className="row">
                <dt className="col-sm-3">Sporting Event</dt>
                <dd className="col-sm-9">{post.description}</dd>

                <dt className="col-sm-3">Type of Sport </dt>
                <dd className="col-sm-9">{post.postCategory}</dd>

                <dt className="col-sm-3">Date</dt>
                <dd className="col-sm-9">{post.date}</dd>

                <dt className="col-sm-3">Price</dt>
                <dd className="col-sm-9">{post.price}</dd>

                <dt className="col-sm-3">Card Number</dt>
                <dd className="col-sm-9">{post.cardno}</dd>

                <dt className="col-sm-3">CVV</dt>
                <dd className="col-sm-9">{post.cvv}</dd>
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
              {post !== undefined && (
                <div style={{ marginLeft: "100px", marginTop: "-60px" }}>
                  <br />
                  <Button
                    onClick={() => {
                      pdfGenerate(post);
                    }}
                  >
                    Download Bill
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default PostDetails;
