import React, { useMemo } from 'react';
import styled from 'styled-components';

const Checkbox = ({ name, value, onChange, text, required }) => {
  return (
    <CheckboxLabel className="checkbox" htmlFor={name}>
      <input
        className="blind"
        type="checkbox"
        id={name}
        defaultChecked={false}
        value={value}
        onChange={onChange}
      />
      <CheckboxIcon value={value}></CheckboxIcon> {text}{' '}
      {required && <em>(필수)</em>}
    </CheckboxLabel>
  );
};
const CheckboxLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: flex-start;
`;
const CheckboxIcon = styled.span`
  width: 1em;
  height: 1em;
  background: ${props => (props.value ? '#ff6155' : '#eee')};
  margin-right: 10px;
  border-radius: 50%;
  transition: all 0.3s;
`;

export default Checkbox;
