import { useState } from "react";

const MoreForm = () => {
  const [firstname, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  // const [forms, setForms] = useState([]);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState("false");
  const [firstNameErrors, setfirstNameErrors] = useState(null);
  const [LnameErrors, setLnameErrors] = useState(null);
  const [EmailErrors, setEmailErrors] = useState(null);
  const [PasswordErrors, setPasswordErrors] = useState(null);
  const [CpasswordErrors, setCpasswordErrors] = useState(null);


  const firstnameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 1){
      setfirstNameErrors('Name is required');
    }else if (e.target.value.length < 2 ){
      setfirstNameErrors("Field must be at least 2 characters!")
    }else {
      setfirstNameErrors(null);
    }
  }

  const lnameHandler = (e) => {
    setLname(e.target.value);
    if (e.target.value.length < 1){
      setLnameErrors('Name is required');
    }else if (e.target.value.length < 2 ){
      setLnameErrors("Field must be at least 2 characters!")
    }else {
      setLnameErrors(null);
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1){
      setEmailErrors('Email is required');
    }else if (e.target.value.length < 5 ){
      setEmailErrors("Field must be at least 5 characters!")
    }else {
      setEmailErrors(null);
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1){
      setPasswordErrors('Password must match!');
    }else if (e.target.value.length < 8 ){
      setPasswordErrors("Password must be at least 8 characters!")
    }else {
      setPasswordErrors(null);
    }
  }

  const cpasswordHandler = (e) => {
    setCpassword(e.target.value);
    if (e.target.value.length < 1){
      setCpasswordErrors('Password must match!');
    }else if (password != e.target.value){
      setCpasswordErrors("Password must match!")
    }else if (e.target.value.length < 8 ){
      setPasswordErrors("Password must be at least 8 characters!")
    }else {
      setCpasswordErrors(false);
    }
  }





  // when user create another form(click the button we should see all the toHaveFormValues
  //   that typed in)
  //   const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = {
  //     firstname: firstname,
  //     lname: lname,
  //     email: email,
  //     password: password,
  //     cpassword: cpassword,
  //   };
  // setForms([...forms, form]);
  // to get all infor entered with
  // spread method first
  // }

  return (
    <div className="card">
      <h5 className="card-header">More Form</h5>

      {/* TERNARY STATEMENT */}
      {/* {hasBeenSubmitted ? "Thank you for" : "please enter the NAME"} */}

      <div className="card-body">
        {/* if you have a btn and to active it- write this 
        <form onSubmit={(e) => handleSubmit(e)}> */}

        <form>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="form-control"
              value={firstname}
              onChange={firstnameHandler}
              // onChange={(e) => setName(e.target.value)}
            />
            {
              firstNameErrors &&
              <span class="form-text text-danger">{firstNameErrors}</span>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="form-control"
              value={lname}
              onChange={lnameHandler}
              // onChange={(e) => setLname(e.target.value)}
            />
            {
              LnameErrors &&
              <span class="form-text text-danger">{LnameErrors}</span>
            }

          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={email}
              onChange={emailHandler}
              // onChange={(e) => setEmail(e.target.value)}
            />
            {
              EmailErrors &&
              <span class="form-text text-danger">{EmailErrors}</span>
            }


          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={password}
              onChange={passwordHandler}
              // onChange={(e) => setPassword(e.target.value)}
            />
            {
              PasswordErrors &&
              <span class="form-text text-danger">{PasswordErrors}</span>
            }
            
          </div>
          {/* type input suppose to be number? */}
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              className="form-control"
              value={cpassword}
              onChange={cpasswordHandler}
              // onChange={(e) => setCpassword(e.target.value)}
            />
            {
              CpasswordErrors &&
              <span class="form-text text-danger">{CpasswordErrors}</span>
            }




          </div>
          {/* this is for img url if u wanna add it
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image URL</label>
            <input type="text" name="image" id="image" className="form-control" />
          </div> */}

          {/* this is a how to add button */}
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-info">
              Create Form
            </button>
          </div>
        </form>
        <div className="mb-3">
          <h3>Validations</h3>
          <p> First Name : {firstname}</p>
          <p> Last Name : {lname}</p>
          <p> Email : {email}</p>
          <p>Password : {password}</p>
          <p>Confirm Password : {cpassword}</p>
        </div>
      </div>
    </div>
  );
};

export default MoreForm;
