import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`  
  width: 100%;
  height: 15%;
`;

const TitleContent = styled.div`  
  p {
    padding: 0;
    margin: 0;
    text-align: center;
  }
`;

const Title = () => (
  <Wrapper className="d-flex p-2 m-0 justify-content-center align-items-end">
    <TitleContent className="d-flex flex-column justify-content-center">
      <h1>My Appointments</h1>
      <p>List of appointments by Patient</p>
    </TitleContent>
  </Wrapper>
);

export default Title;
