import styled from 'styled-components'

export const Error = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 80px;
  border: 1px solid #a4072a;
  border-radius: 5px;
  background-color: #f8a0a6;
  color: #a4072a;
  z-index: 99999;
  text-align: center;
  padding-top: 20px;
  display: ${(props) => (props.active === '0' ? 'none' : 'block')};
`

export const Button = styled.button`
  color: #a4072a;
  background-color: transparent;
  border: 0;
  outline: none;
`
