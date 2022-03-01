import React, { useState } from "react";

const useForm = (submitCallback) => {
  const [isError, setIsError] = useState(false);
  const [state, setState] = useState({});
  const [confirmPassword, setConfirmPassword] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCallback();
  };

  const handleChange = (e) => {
    e.persist();
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  // const checkValidation = (e) => {
  //   setConfirmPassword(e.target.value)
  //   if (state.password !== confirmPassword){
  //     alert("Your confirm password does not match to password")
  //   }
  // }

  const checkValidation = (e) => {
    setConfirmPassword([e.target.value]);
    if (state.password !== confirmPassword) {
      setIsError = true;
    } else setIsError = false;
  };

  return [state, handleChange, handleSubmit, checkValidation, isError];
};

export default useForm;
