import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme["base-card"]};

  border-top-left-radius: 8px;
  border-top-right-radius: 10%;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 8px;


  img {
    margin-top: -18px;
    width: 7.2rem;
  }

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", "Roboto", sans-serif;
    font-size: 1.3rem;
    font-weight: 800;
    margin-bottom: 8px;
  }
`;

export const DescriptionLabel = styled.p`
  width: 85%;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme["base-label"]};

  margin-bottom: 30px;
`;

export const TypeSpan = styled.span`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 4px 8px;
  border-radius: 25px;
  margin-top: 15px;
  margin-bottom: 18px;
  font-size: 0.625rem;
  font-weight: 600;
`;

export const ShoppingInfos = styled.div`
  display: flex;
  align-items: center;

  div:first-child {
    display: flex;
    align-items: baseline;
    gap: 3px;

    span {
      font-size: 0.87rem;
      font-weight: 500;
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme["base-button"]};
    padding: 3px 6px;
    border-radius: 6px;

    margin-left: 20px;
    margin-right: 8px;

    button:first-child {
      font-size: 1.8rem;
    }

    button {
      color: ${(props) => props.theme["purple"]};
      background: none;
      border: none;
      font-size: 1.25rem;
      cursor: pointer;
      padding: 0 5px;

      &:hover {
        color: ${(props) => props.theme["purple-dark"]};
      }

      &:focus {
        outline: none;
      }
    }

    p {
      color: ${(props) => props.theme["base-title"]};
      font-weight: 500;
      padding: 0 5px;
    }
  }

  button {
    background-color: ${(props) => props.theme["purple-dark"]};
    padding: 8px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.2s linear;

    &:hover {
      background-color: ${(props) => props.theme['purple']};
    }
  }
`;

export const Price = styled.p`
  color: ${(props) => props.theme["base-text"]};
  font-family: "Baloo 2", "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
`;