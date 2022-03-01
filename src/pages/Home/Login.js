import React from 'react';
import { StyledForm } from '../../components/shared/Form/Form.styled';
import { useNavigate } from 'react-router-dom';
import useForm from '../../customHook/useForm';


const Login = ({setShowRegister, showRegister}) => {
    
    let navigate = useNavigate();

    const submited = (e) => {
        navigate("/user");
    };

    const [values, handleChange, handleSubmit] = useForm(submited);

  return (
      <StyledForm>   
          <form className="form" onSubmit={handleSubmit}>
              <h2 className="mb-4 mt-4 pb-3">Login to continue</h2>
              <div className="form-group row">
                  <label htmlFor="username" className="col-sm-4 form-label pt-2">Username: </label>
                  <div className="col-sm-8">
                      <input
                          value={values.username || ""}
                          onChange={handleChange}
                          name="username"
                          className="form-control"
                          id="username"
                          type="text"
                          maxLength="30"
                          required={true}
                          minLength="6"
                      />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="password" className="col-sm-4 col-form-label">Password: </label>
                  <div className="col-sm-8">
                      <input
                          className="form-control"
                          id="password"
                          type="password"
                          name="password"
                          maxLength="20"
                          required={true}
                          minLength="6"
                          value={values.password || ""}
                          onChange={handleChange}
                      />
                  </div>
              </div>
              <div className="forgot-password">
                  <a href="#" onClick={() => { setShowRegister(!showRegister)} }>Forgot your password?</a>
              </div>
              <input className="submit mt-4" type="submit" value="Login" />
              <div className="submited">
                   Don't have an account?  <span>
                        <a href="#" onClick={() => { setShowRegister(!showRegister)} }>Register</a>
                    </span>
              </div>  
          </form>
      </StyledForm>
  );
};


export default Login;