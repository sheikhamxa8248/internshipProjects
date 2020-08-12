import React, { useEffect, useState } from "react";
import LinkButton from "./LinkButton";
import axios from "axios";

function Home() {
  //state to store teacher data
  const [teacher, setTeacher] = useState({
    lastname: [],
    subject: [],
    crn: [],
    teacherLength: [],
  });

  //state to store the student data
  const [student, setStudent] = useState({
    studentNames: [],
    studentNetIds: [],
    studentUins: [],
    studentIds: [],
    studentInst: [],
    studentLength: [],
  });

  //state to store the selected option
  const [option, setOption] = useState({
    option: "",
    newArray: [],
  });

  //gets the teacher data from the database
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
            subject: response.data.map((teacher) => teacher.subject),
            crn: response.data.map((teacher) => teacher.crn),
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

  //gets the student data from the database
  useEffect(() => {
    let indexArray = [];
    function makeIndexArray(index) {
      for (var i = 0; i < index; i++) {
        indexArray.push(i);
      }
    }
    axios
      .get("http://localhost:5000/students/")
      .then((response) => {
        if (response.data.length > 0) {
          makeIndexArray(response.data.length);
          setStudent({
            studentNames: response.data.map((student) => student.fullname),
            studentNetIds: response.data.map((student) => student.netId),
            studentUins: response.data.map((student) => student.uin),
            studentInst: response.data.map((student) => student.inst),
            studentIds: response.data.map((student) => student._id),
            studentLength: indexArray,
          });
        } else {
          alert("No students found. Please create a new student.");
          window.location = "/student";
        }
      })
      .catch((err) => {
        alert("Can't retrieve the data. Please refresh or try again later.");
      });
  }, []);

  //Deletes the selected student from the database
  function onClickDelete(e) {
    axios
      .delete("http://localhost:5000/students/" + e.target.value)
      .then((response) => {
        window.location = "/";
      });
  }

  //renders the students with the same instructor as the selected one
  let arr = [];
  function onChangeOption(e) {
    for (var i = 0; i < student.studentLength.length; i++) {
      if (student.studentInst[i] === e.target.value) {
        arr.push(i);
      }
    }
    setOption({
      option: e.target.value,
      newArray: arr,
    });
  }

  return (
    <div>
      <div className="box">
        <select
          value={option.option}
          onChange={(e) => {
            onChangeOption(e);
          }}
        >
          <option defaultValue="">Teacher</option>
          {teacher.teacherLength.map((i) => {
            return (
              <option key={teacher.lastname[i]} value={teacher.lastname[i]}>
                {teacher.lastname[i]}: {teacher.subject[i]} ({teacher.crn[i]})
              </option>
            );
          })}
        </select>
      </div>
      <div className="container">
        <ul>
          {option.newArray.map((i) => {
            return (
              <li key={student.studentIds[i]}>
                <div className="bottom">{student.studentNames[i]}</div>
                <p>
                  <br />
                  Net ID: {student.studentNetIds[i]}
                  <br />
                  <br />
                  UIN: {student.studentUins[i]}
                </p>
                <br />
                <br />
                <LinkButton
                  to="/student"
                  input={student.studentIds[i]}
                  className="raise edit"
                >
                  Edit
                </LinkButton>
                <button
                  className="raise"
                  value={student.studentIds[i]}
                  onClick={(e) => onClickDelete(e)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
