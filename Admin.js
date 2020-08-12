import React, { useState, useEffect } from "react";
import axios from "axios";

function Student(props) {
  //state to store the selected instructor
  const [inst, setInst] = useState();
  //state to store the data recieved from the database
  const [teacher, setTeacher] = useState({
    lastname: [],
    id: [],
    teacherLength: [],
  });
  //gets the data from the database
  useEffect(() => {
    let indexArray = [];
    function makeIndexArray(index) {
      for (var i = 0; i < index; i++) {
        indexArray.push(i);
      }
    }
    axios
      .get("http://localhost:5000/teachers/")
      .then((response) => {
        if (response.data.length > 0) {
          makeIndexArray(response.data.length);
          setTeacher({
            lastname: response.data.map((teacher) => teacher.lastname),
            id: response.data.map((teacher) => teacher._id),
            teacherLength: indexArray,
          });
        } else {
          alert("No Teachers found. Please create a new teacher.");
          window.location = "/teacher";
        }
      })
      .catch((err) => {
        alert(
          "Can't retrieve data from the database. Please refresh or try again later."
        );
      });
  }, []);

  //matches the input with the teacher in the database
  //gets their id and then deletes it
  let index;
  const handleForm = (e) => {
    e.preventDefault();
    for (var i = 0; i < teacher.lastname.length; i++) {
      if (teacher.lastname[i] === inst) {
        index = i;
      }
    }
    axios
      .delete("http://localhost:5000/teachers/" + teacher.id[index])
      .then((response) => {
        window.location = "/admin";
      });
  };
  return (
    <div id="form-main">
      <div id="form-div">
        <form onSubmit={handleForm}>
          <h1 style={{ color: "white" }}>Admin</h1>

          <p>
            <select
              className="feedback-input"
              value={inst}
              onChange={(e) => {
                setInst(e.target.value);
              }}
            >
              <option defaultValue="">Teacher</option>
              {teacher.teacherLength.map((i) => {
                return (
                  <option
                    key={teacher.lastname[i]}
                    defaultValue={teacher.lastname[i]}
                  >
                    {teacher.lastname[i]}
                  </option>
                );
              })}
            </select>
          </p>
          <div className="submit">
            <input type="submit" value="Delete" id="button-blue" />
            <div className="ease"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Student;
