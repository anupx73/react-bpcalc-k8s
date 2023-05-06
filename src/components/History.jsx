import React, { useEffect, useState } from "react";
import config from '../config.json';

function History() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(config.backend.url + `/api/bpcalc/`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="container">
      <tbody class="table table-bordered">
        <tr class="table-primary">
          <th>Name</th>
          <th>Email</th>
          <th>Systolic</th>
          <th>Diastolic</th>
          <th>Category</th>
          <th>Time of Reading</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Name}</td>
            <td>{item.Email}</td>
            <td>{item.Systolic}</td>
            <td>{item.Diastolic}</td>
            <td>{item.Category}</td>
            <td>{item.ReadingTime}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default History;
