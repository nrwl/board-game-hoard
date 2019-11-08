import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactPublishProps {}

const StyledReactPublish = styled.div`
  color: pink;
`;

export const ReactPublish = (props: ReactPublishProps) => {
  return (
    <StyledReactPublish>
      <h1>Welcome to react-publish component!</h1>
    </StyledReactPublish>
  );
};

export default ReactPublish;
