import React, { useState } from "react";
import "./Form.css";
import Download from './Download.jpg';
export default function Form() {
  const [state, setState] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Mobile: "",
    Birthday: "",
    Gender: "Male",
    Subject: "Choose option",
  });
  const { FirstName, LastName, Email, Mobile, Birthday, Gender, Subject } = state;
  const [errors, setErrors] = useState([]);
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const RadioStatus = (e) => {
    const { name, value } = e.target;
    if (value === "Male") {
      setCheck1(true);
      setCheck2(false);
      setState({ ...state, [name]: value });
    } else if (value === "Female") {
      setCheck1(false);
      setCheck2(true);
      setState({ ...state, [name]: value });
    }
  };
  const handleDrop = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const SubmitForm = () => {
    setErrors(Validate(state));
    if (Object.keys(errors) == 0) {
      setState({
        ...state,
        FirstName: "",
        LastName: "",
        Email: "",
        Mobile: "",
        Birthday: "",
        Gender: "Male",
        Subject: "Choose option",
      });
    }
    alert(JSON.stringify(state, null, 4))
  };
  const Validate = (state) => {
    const err = {};
    if (!FirstName) {
      err.FirstName = "Please enter the First Name";
    } else if (!/^[a-zA-Z ]{1,100}$/.test(FirstName)) {
      err.FirstName = "Accepts Alphabets, space & Max 100 Char";
    }
    if (!LastName) {
      err.LastName = "Please enter the Last Name";
    } else if (!/^[a-zA-Z ]{1,100}$/.test(LastName)) {
      err.LastName = "Accepts Alphabets, space & Max 100 Char";
    }
    if (!Email) {
      err.Email = "Please enter Email";
    } else if (
      !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(Email)
    ) {
      err.Email = "Invaild email.";
    }
    if (!Mobile) {
      err.Mobile = "Please enter the Phone number";
    } else if (Mobile.length !== 10) {
      err.Mobile = "Phone number should be 10 digits.";
    }
    if (Subject === "Choose option") {
      err.Subject = "Please select a subject";
    }
    if (!Birthday) {
      err.Birthday = "Date cannot be empty";
    }
    return err;
  };

  return (
    <div className="main-body container-fluid">
      <nav className="navbar navbar-expand-lg mb-2 border border-primary">
        <div className="container-fluid">
        <h1 className="border border-dark bg-white" width="80px" height="50px">Logo</h1>
        <img src={Download} alt="profile-img" height="50px" width="80px" />
        </div>
      </nav>
      <div className="middlepart">
        <div className="container">
          <div className="header">
            <h4>Registration Form</h4>
          </div>
          <form className="formpart">
            
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                <label>First Name</label>
                <input type="text" name="FirstName" value={FirstName} onChange={(e) => changeHandler(e)} className="form-control"/>
                <p>{errors.FirstName}</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                <label>Last Name</label>
                <input type="text" name="LastName" value={LastName} onChange={(e) => changeHandler(e)} className="form-control"/>
                <p>{errors.LastName}</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                <label>Birthday</label>
                <input type="date" name="Birthday" value={Birthday} onChange={(e) => changeHandler(e)} className="form-control"/>
                <p>{errors.Birthday}</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                <label>Gender</label>
                <div className="my-radio d-flex align-item-center">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="Gender" value="Male" checked={check1} onChange={(e) => RadioStatus(e)}/>
                    <label className="form-check-label me-2">Male </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="Gender" value="Female" checked={check2} onChange={(e)=>RadioStatus(e)}/>
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                <label>Email</label>
                <input type="email" name="Email" value={Email} onChange={(e) => changeHandler(e)} className="form-control"/>
                <p>{errors.Email}</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                <label>Phone Number</label>
                <input type="number" name="Mobile" value={Mobile} onChange={(e) => changeHandler(e)}  className="form-control"/>
                <p>{errors.Mobile}</p>
              </div>
              <div className="col-lg-12 mb-2">
                <label className="form-label">Subject</label>
                <select className="form-select" name="Subject" value={Subject}  onChange={handleDrop}>
                  <option value="Choose option" selected>Choose option</option>
                  <option value="new user">New-User</option>
                  <option value="existing user">Existing-User</option>
                </select>
                <p>{errors.Subject}</p>
              </div>
              <div className="col mb-3">
                <button type="button" class="btn btn-primary" onClick={SubmitForm}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="footerpart container-fluid border border-primary p-2">
        <footer className="insidefooter text-center">
          <p>Copyright Information</p>
        </footer>
      </div>
    </div>
  );
}