import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const SIZES = {
    small: {
      fontSize: 14,
      iconSize: 16,
      borderThickness: 1,
      height: 24,
    },
    large: {
      fontSize: 18,
      iconSize: 24,
      borderThickness: 2,
      height: 36,
    },
  };

  const styles = SIZES[size];
  return (
    <Wrapper style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <SearchInput
        placeholder={placeholder}
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
        }}
      />
      <IconStyles>
        <Icon id={icon} size={styles.iconSize} />
      </IconStyles>
    </Wrapper>
  );
};

export default IconInput;

const Wrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: var(--width);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);

  font-weight: 700;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconStyles = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  color: ${COLORS.gray700};
  font-size: var(--font-size);
  transform: var(--scale);
  pointer-events: none;

  ${SearchInput}:hover + & {
    color: ${COLORS.black};
  }
`;
