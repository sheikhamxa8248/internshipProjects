import React, { useState, useEffect } from "react";
import axios from "axios";

function Student(props) {
  //state for each input
  const [fullname, setFullname] = useState();
  const [netId, setNetId] = useState();
  const [uin, setUin] = useState();
  const [inst, setInst] = useState(" ");
  //state to recieve teacher data from database
  const [teacher, setTeacher] = useState({
    lastname: [],
    teacherLength: [],
  });
  //get the teacher data from the database
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

  //update states with the inputs
  const onChangeFullname = (e) => {
    setFullname(e.target.value);
  };

  const onChangeNetId = (e) => {
    setNetId(e.target.value);
  };
  const onChangeUin = (e) => {
    setUin(e.target.value);
  };

  //handle submit
  const handleForm = (e) => {
    e.preventDefault();

    const latestStudent = {
      fullname: fullname,
      netId: netId,
      uin: uin,
      inst: inst,
    };

    //if this is undefined that means a new student is being added
    //because there is no associated ID.
    if (props.location.state === undefined) {
      axios
        .post("http://localhost:5000/students/add", latestStudent)
        .then((res) => {
          window.location = "/";
        })
        .catch((err) => {
          alert(
            err + "\nError! Please make sure all the information is correct."
          );
        });
    }
    //updates the student with the given ID
    else {
      axios
        .post(
          "http://localhost:5000/students/update/" + props.location.state.id,
          latestStudent
        )
        .then((res) => {
          window.location = "/";
        })
        .catch((err) => {
          alert(
            err + "\nError! Please make sure all the information is correct."
          );
        });
    }
  };

  return (
    <div id="form-main">
      <div id="form-div">
        <form onSubmit={handleForm}>
          <h1 style={{ color: "white" }}>Student</h1>

          <p>
            <input
              type="text"
              className="feedback-input"
              placeholder="Full Name"
              defaultValue={fullname}
              onChange={onChangeFullname}
            />
          </p>
          <p>
            <input
              type="text"
              className="feedback-input"
              placeholder="Net ID"
              defaultValue={netId}
              onChange={onChangeNetId}
            />
          </p>
          <p>
            <input
              type="text"
              className="feedback-input"
              placeholder="UIN"
              defaultValue={uin}
              onChange={onChangeUin}
            />
          </p>
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
            <input type="submit" value="SEND" id="button-blue" />
            <div className="ease"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Student;
