import React from "react";
import { StyledForm } from "../../components/shared/Form/Form.styled";
import { useNavigate } from "react-router-dom";
import useForm from "../../customHook/useForm";

const Register = ({ setShowRegister, showRegister }) => {
  let navigate = useNavigate();

  const submited = (e) => {
    navigate("/admin");
  };

  const [values, handleChange, handleSubmit, checkValidation, isError] =
    useForm(submited);

  return (
    <StyledForm>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="mb-4 mt-4 pb-3">Register</h2>
        <div className="form-group row">
          <label
            htmlFor="username"
            className="col-sm-4 form-label pt-2 mb-0 pb-2"
          >
            Username:{" "}
          </label>
          <div className="col-sm-8 ">
            <input
              value={values.username || ""} // when values.username object is empty it can get the empty string value so it won't show an error
              onChange={handleChange}
              className="form-control"
              id="username"
              type="text"
              name="username"
              maxLength="30"
              required={true}
              minLength="6"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-4 col-form-label">
            Email:{" "}
          </label>
          <div className="col-sm-8">
            <input
              value={values.email || ""}
              onChange={handleChange}
              className="form-control"
              id="email"
              type="email"
              name="email"
              maxLength="60"
              required={true}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-4 col-form-label">
            Password:{" "}
          </label>
          <div className="col-sm-8">
            <input
              value={values.password || ""}
              onChange={handleChange}
              className="form-control"
              id="password"
              type="password"
              name="password"
              maxLength="20"
              required={true}
              minLength="6"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-4 col-form-label pt-0">
            Confirm Password:{" "}
          </label>
          <div className="col-sm-8" style={{ paddingTop: "0px" }}>
            <input
              value={values.confirmpassword || ""}
              onChange={(e) => {
                handleChange(e);
                checkValidation(e);
              }}
              className="form-control"
              id="confirmpassword"
              type="password"
              name="confirmpassword"
              maxLength="20"
              required={true}
              minLength="6"
            />
            <p>
              {isError
                ? "Your confirm password does not match to password"
                : ""}
            </p>
          </div>
        </div>
        <input className="submit mt-4" type="submit" value="Register" />
        <div className="register ">
          Already have an account?
          <span>
            <a
              href="#"
              onClick={() => {
                setShowRegister(!showRegister);
              }}
            >
              Login
            </a>
          </span>
        </div>
      </form>
    </StyledForm>
  );
};

export default Register;
