import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentedSelect>
        {displayedValue}
        <IconWrapper style={{ '--size': `${24}px` }}>
          <Icon id='chevron-down' strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentedSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --color: ${COLORS.gray700};
  --border: none;
  position: relative;
  width: max-content;

  &:hover {
    --color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentedSelect = styled.div`
  font-size: 1rem;
  color: var(--color);
  background-color: ${COLORS.transparentGray15};
  padding: 12px 50px 12px 16px;
  border-radius: 8px;
  border: var(--border);

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 18px;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
