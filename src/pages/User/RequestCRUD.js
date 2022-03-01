import React from 'react'
import { StyledForm } from '../../components/shared/Form/Form.styled';

const RequestCRUD = () => {

  const handleSubmit = (e) => {
    alert('We have recieved your request, You will be informed about the product soon!');
    e.preventDefault();
  }

  return (
        <>
          <StyledForm>
            <form className="form" 
              style={{marginTop: '40px' , width: '550px'}}
              onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="request" className="col-sm-4 col-form-label">Write request: </label>
                    <div className="col-sm-8">
                        <textarea
                            className="form-control"
                            id="request"
                            name="request"
                            maxLength="200"
                            rows="5"
                            required={true} >
                        </textarea>
                    </div>
                </div>

                <input className="submit mt-4" type="submit" value="Add Request"  />
            </form>
          </StyledForm>
        </>
  );
};

export default RequestCRUD