import React, { useState } from "react";
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
  const [message, setMessage] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    try {
      let userdata = {
        name: name,
        email: email,
        systolic: systolic,
        diastolic: diastolic,
      };
      let res = await fetch("http://localhost/api/bpcalc/", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          systolic: systolic,
          diastolic: diastolic,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("")
        setEmail("")
        setSystolic("")
        setDiastolic("")
        setMessage("BP Calculated Succcessfully" + resJson.Category);
      }
      else {
        setMessage("Some error occured!!");
      }
    } catch (err) {
      console.log(err);
    }
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
                  onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

              <Form.Group className="mb-3" >
                <label className="form-label">Email</label>
                <Form.Control
                  type="text"
                  name="email"
                  className="form-control p-2"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setSystolic(e.target.value)}
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
                  onChange={(e) => setDiastolic(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Button type="submit" className="btn btn-primary mt-4">
                  Calculate
                </Button>
              </Form.Group>

              <br />
              <Form.Group className="mb-3 message">{message ? <p>{message}</p> : null}
              </Form.Group>

            </Form>
      </Container>
    </div>
  );
}

export default App;
