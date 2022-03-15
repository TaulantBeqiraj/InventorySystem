import styled from "styled-components";

export const StyledCard = styled.div`
  width: 320px;
  border-radius: 10px;
  background-color: var(--clr-grey-4);
  color: white;
  box-shadow: 3px 5px 10px 1px var(--clr-grey-6);
  margin-bottom: 15px;
  
  .card-head {
    display: flex;
    justify-content: space-between;
    margin: 15px;
  }
  
  .card-title {
      display: flex;
      align-items: center;
  }

  .card-title h3 {
    margin: 0px;
  }
  
  .card-title img {
        height: 30px;
        margin-right: 20px;
  }

  .card-link p {
    margin: 8px 10px 0px 0px;
    color: var(--clr-primary-7);
  }

 .card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

.stats {
  text-align: center;
  }
`;
