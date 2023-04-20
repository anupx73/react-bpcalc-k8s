//import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [message, setMessage] = useState("");

    const handleusername = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleemail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlesystolic = (event) => {
    const systolic = event.target.value;
    setSystolic(systolic);
  };

  const handlediastolic = (event) => {
    const diastolic = event.target.value;
    setDiastolic(diastolic);
  };  

  const submitData = async (e) => {
    e.preventDefault();
    const userdata = {
      name: name,
      email: email,
      systolic: systolic,
      diastolic: diastolic,
    };
    await axios
      .post(
        "http://localhost/api/bpcalc/",
        JSON.stringify(userdata)
      )
      .then((result) => {
        setMessage(result.data.msg);
        console.log(result.data);
        console.log(result.data.msg);
      });
  };

  return (
    <div className="App">
      <Container className="content">

        <div className="row">
          <div className="col-sm-12">
            <h2 className="mt-4 mb-4 fw-bold">
              BP Calculator  
            </h2>

            {message ? (
              <div className="text-success text-white">
                {" "}
                <h5>{message} </h5>
              </div>
            ) : (
              <></>
            )}

            <form onSubmit={submitData} className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Name </label>
                <input
                  type="text"
                  name="name"
                  className="form-control p-2"
                  onChange={(e) => handleusername(e)}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control p-2"
                  onChange={(e) => handleemail(e)}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Systolic</label>
                <input
                  type="number"
                  min="70"
                  max="190"
                  name="systolic"
                  className="form-control p-2"
                  onChange={(e) => handlesystolic(e)}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Diastolic</label>
                <input
                  type="number"
                  min="40"
                  max="100"
                  name="diastolic"
                  className="form-control p-2"
                  onChange={(e) => handlediastolic(e)}
                />
              </div>              

              <div className="col-md-3">
                <button type="submit" className="btn btn-primary mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
