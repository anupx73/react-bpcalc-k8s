import React, { useState } from "react";
import config from '../../config.json';

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [message, setMessage] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          email: email,
          systolic: systolic,
          diastolic: diastolic,
        })
      };
      let res = await fetch(config.backend.url + '/api/bpcalc/', requestOptions);
      let resJson = await res.json();
      if (res.status === 202) {
        setName("")
        setEmail("")
        setSystolic("")
        setDiastolic("")
        setMessage("BP Calculated Succcessfully: " + resJson.message);
      }
      else {
        setMessage("Some error occured!!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <div class="container">
          <form onSubmit={submitData}>
              <div class="input-group mb-3">
                  <input class="form-control" placeholder="Patient Name"
                    type="text" 
                    onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div class="input-group mb-3">
                  <input class="form-control" placeholder="Patient Email Address"
                    type="text" 
                    onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div class="input-group mb-3">
                  <input class="form-control" placeholder="Systolic Pressure"
                    type="number" 
                    min="70"
                    max="190"
                    onChange={(e) => setSystolic(e.target.value)}
                  />
                  <span class="input-group-text">mmHg</span>
              </div>
              <div class="input-group mb-5">
                  <input class="form-control" placeholder="Diastolic Pressure"
                    type="number" 
                    min="40"
                    max="100"
                    onChange={(e) => setDiastolic(e.target.value)} 
                  />
                  <span class="input-group-text">mmHg</span>
              </div>
              <div class="input-group mb-5">
                  <button type="submit" class="btn btn-primary">Calculate</button>
              </div>

              <div class="input-group mb-5">
                {message ? <p class="input-group alert alert-primary">{message}</p> : null}
              </div>
          </form>
      </div>
  );
}

export default Home;
