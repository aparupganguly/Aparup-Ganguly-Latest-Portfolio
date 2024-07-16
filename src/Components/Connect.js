import React, { useState } from "react";
import "../Styles/Connect.css";

const Connect = () => {
  const [fullName, setFullName] = useState("");
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Reason:", reason);
    console.log("Email:", email);
  };
  return (
    <div className="connectContainer">
      <div className="WorkHeadingContainer">
        <p>CONNECT</p>
      </div>
      <div className="formContainer">
        <form className="custom-form" onSubmit={handleSubmit}>
          <label>
            My Name is
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="your full name"
            />
          </label>
          <label>
            the reason of connecting is
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="project/offer"
            />
          </label>
          <label>
            My email address is
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email"
            />
          </label>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
