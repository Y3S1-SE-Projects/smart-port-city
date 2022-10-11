import React, { Component } from "react";
import { Button } from "reactstrap";
import jsPDF from "jspdf";
import logo from "../images/logo.png";

class PDF extends Component {
  pdfGenerate = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(logo, "PNG", 65, 20, 500, 150);
    doc.setFont("Helvertica", "Bold");
    doc.text(60, 200, "Billing Information");
    doc.text(
      60,
      215,
      "Here are your billing information for the purchase you have made in Smart Port City"
    );
    doc.text(
      60,
      230,
      "Please note that the below information is autogenertated"
    );

    doc.text(60, 280, "Name : Chandur Dissanayake");
    doc.text(60, 300, "Sporting Event : Olympics");
    doc.text(60, 320, "Date : 05/01/2001 ");
    doc.text(60, 340, "Price : 2500");
    doc.text(60, 360, "Card Number : 000000000000");
    doc.text(60, 380, "CVV : 411");
    doc.text(60, 400, "Thank you for your purchase. Please came back again !");

    doc.save("bill.pdf");
  };

  render() {
    return (
      <div style={{ marginLeft: "100px", marginTop: "-60px" }}>
        <br />
        <Button onClick={this.pdfGenerate}>Download Bill</Button>
      </div>
    );
  }
}

export default PDF;
