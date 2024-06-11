import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 10rem;

  nav {
    display: flex;
    align-items: center;
    gap: 12px;

    a {
    background-color: ${(props) => props.theme['yellow-light']};
    padding: 8px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid transparent;

    transition: 0.2s linear;

    &:hover {
      border: 1px solid ${(props) => props.theme['yellow']};
    }
  }
  }

  span:first-child {
    background-color: ${(props) => props.theme['purple-light']};
    padding: 8px;
    font-size: 14px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${(props) => props.theme['purple-dark']};
    border: 1px solid transparent;
  }

  div {
    position: relative;
  }
`

export const CartAmountSpan = styled.span`
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 8px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme['white']};
  background-color:  ${(props) => props.theme['yellow-dark']};
`