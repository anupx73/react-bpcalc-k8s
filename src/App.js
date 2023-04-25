import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from './logo.png';
import history from './history.png';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  //const [message, setMessage] = useState("");

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
      .post("http://localhost/api/bpcalc/", JSON.stringify(userdata))
      .then(response => { console.log(response) })
      .catch(err => { console.log(err) });
  };

  return (
    <div className="App" style={{padding: "4em"}}>
      <Container className="content">
            <Form.Group class="d-flex">
                <Form.Group class="me-auto p-2">
                    <h4 style={{color: "#3372FF"}}><span><img src={logo} alt="Logo" width="55" height="60"/></span>&nbsp;&nbsp;BP Category Calculator</h4>
                </Form.Group>
                <Form.Group class="p-2">
                    {/* <form action="#" method="GET"> */}
                        <button type="submit" class="btn btn-outline-primary" style={{padding: 10, margin: 0}}>
                            <h5 style={{padding: 0, margin: 0}}><span><img src={history} alt="Logo" width="24" height="24"/></span>&nbsp;History</h5>
                        </button>
                    {/* </form> */}
                </Form.Group>
            </Form.Group>
            <hr /><br />

            <Form onSubmit={submitData} className="row g-3">
            <Form.Group className="mb-3" >
                <label className="form-label">Name </label>
                <Form.Control
                  type="text"
                  name="name"
                  className="form-control p-2"
                  onChange={(e) => handleusername(e)}
                />
            </Form.Group>

              <Form.Group className="mb-3" >
                <label className="form-label">Email</label>
                <Form.Control
                  type="text"
                  name="email"
                  className="form-control p-2"
                  onChange={(e) => handleemail(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" >
                <label className="form-label">Systolic</label>
                <Form.Control
                  type="number"
                  min="70"
                  max="190"
                  name="systolic"
                  className="form-control p-2"
                  onChange={(e) => handlesystolic(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" >
                <label className="form-label">Diastolic</label>
                <Form.Control
                  type="number"
                  min="40"
                  max="100"
                  name="diastolic"
                  className="form-control p-2"
                  onChange={(e) => handlediastolic(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Button type="submit" className="btn btn-primary mt-4">
                  Calculate
                </Button>
              </Form.Group>
            </Form>
      </Container>
    </div>
  );
}

export default App;
