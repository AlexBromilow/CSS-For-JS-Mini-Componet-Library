/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const SIZES = {
    small: {
      height: 8,
      width: 370,
      padding: 0,
      borderRadius: 4,
    },
    medium: {
      height: 12,
      width: 370,
      padding: 0,
      borderRadius: 4,
    },
    large: {
      height: 16,
      width: 362,
      padding: 4,
      borderRadius: 8,
    },
  };

  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper style={styles}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          value={value}
          role='progressbar'
          aria-valuenow={value}
          aria-valuemin='0'
          aria-valuemax='100'></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  position: absolute;
  box-sizing: content-box;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  box-sizing: content-box;
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${(p) => `${p.value}%`};
  border-radius: 4px 0 0 4px;
`;
