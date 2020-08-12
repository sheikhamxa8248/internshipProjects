import React, { useState } from "react";
import axios from "axios";

function Teacher() {
  //state to store the inputs
  const [lastname, setLastname] = useState();
  const [subject, setSubject] = useState();
  const [crn, setCrn] = useState();

  //update the state with inputs
  const onChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  const onChangeCrn = (e) => {
    setCrn(e.target.value);
  };

  //create a new teacher
  const handleForm = (e) => {
    e.preventDefault();

    const latestTeacher = {
      lastname: lastname,
      subject: subject,
      crn: crn,
    };

    axios
      .post("http://localhost:5000/teachers/add", latestTeacher)
      .then((res) => {
        window.location = "/";
      })
      .catch((err) => {
        alert(err + "\nPlease make sure all the information is correct.");
      });
  };

  return (
    <div id="form-main">
      <div id="form-div">
        <form onSubmit={handleForm}>
          <h1 style={{ color: "white" }}>Teacher</h1>
          <p>
            <input
              type="text"
              className="feedback-input"
              placeholder="Last Name"
              defaultValue={lastname}
              onChange={onChangeLastname}
            />
          </p>

          <p>
            <input
              type="text"
              className="feedback-input"
              placeholder="Subject"
              defaultValue={subject}
              onChange={onChangeSubject}
            />
          </p>
          <p>
            <input
              type="text"
              className="feedback-input"
              placeholder="CRN"
              defaultValue={crn}
              onChange={onChangeCrn}
            />
          </p>
          <div className="submit">
            <input type="submit" value="SEND" id="button-blue" />
            <div className="ease"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Teacher;
