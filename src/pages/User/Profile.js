import React from "react";
import { StyledForm } from "../../components/shared/Form/Form.styled";

const Profile = () => {
  return (
    <>
      <StyledForm>
        <form
          className="form"
          style={{ marginTop: "40px", width: "550px" }}
          onSubmit={() => alert("Profile infos have been updated!")}
        >
          <h2 className="mb-4 mt-4 pb-3">Update your profile info</h2>
          <div className="form-group row">
            <label htmlFor="username" className="col-sm-4 form-label pb-2">
              Username:{" "}
            </label>
            <div className="col-sm-8">
              <input
                defaultValue="John"
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
                defaultValue="john.doe@example.com"
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
                defaultValue={"John123"}
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
            <label htmlFor="password" className="col-sm-4 col-form-label">
              Confirm Password:{" "}
            </label>
            <div className="col-sm-8">
              <input
                defaultValue={"Taulant123"}
                className="form-control"
                id="confirmpassword"
                type="password"
                name="confirmpassword"
                maxLength="20"
                required={true}
                minLength="6"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="status" className="col-sm-4 col-form-label">
              Status:{" "}
            </label>
            <div className=" col-sm-8">
              <select className="form-control" id="status" name="status">
                <option defaultValue="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="role" className="col-sm-4 col-form-label">
              Role:{" "}
            </label>
            <div className="col-sm-8">
              <select
                defaultValue="User"
                className="form-control"
                id="role"
                name="role"
              >
                <option>User</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
          <input className="submit mt-4" type="submit" value="Save Changes" />
        </form>
      </StyledForm>
    </>
  );
};

export default Profile;
