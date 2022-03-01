import React from 'react'
import { StyledPage } from './Page.styled';

const Page = (props) => {
  return (
    <StyledPage>
      {props.children}
    </StyledPage>
  )
}

export default Page;