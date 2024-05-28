import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 32px 160px;

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
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${(props) => props.theme['purple-dark']};
    border: 1px solid transparent;
  }
`