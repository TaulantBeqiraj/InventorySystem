import React from 'react'
import { StyledForm } from '../../components/shared/Form/Form.styled';

const UserCRUD = () => {

  const handleSubmit = (e) => {
    alert('New user added succesfully!');
    e.preventDefault();
  }

  return (
    <>
    <StyledForm> 
    <form className="form" style={{marginTop: '40px' , width: '550px'}} onSubmit={handleSubmit}>
            <h2 className="mb-4 mt-4 pb-3">Add a new user</h2>
            <div className="form-group row">
                <label htmlFor="username" className="col-sm-4 form-label pb-2">Username: </label>
                <div className="col-sm-8">
                    <input
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
                <label htmlFor="email" className="col-sm-4 col-form-label">Email: </label>
                <div className="col-sm-8">
                    <input
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
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="role" className="col-sm-4 col-form-label">Role: </label>
                <div className="col-sm-8">
                  <select                         
                        value="Active"
                        className="form-control"
                        id="role"
                        name="role"
                  >
                  <option>Admin</option>
                  <option>User</option>
                  </select>
                </div>
            </div>
            <input className="submit mt-4" type="submit" value="Add User" />
        </form>
    </StyledForm>
  </>
  );
};

export default UserCRUD