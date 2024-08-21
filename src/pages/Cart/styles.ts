import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  padding: 5.3rem 10rem;
  gap: 2.25rem;

  section {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;
  }
`;

export const TitlesSections = styled.h1`
  font-size: 1.5rem;
  font-family: "Baloo 2", "Roboto", sans-serif;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const AddressPaymentBox = styled.div`
  display: grid;
  gap: 1rem;
`;

export const AddressSection = styled.section`
  div:first-child {
    display: flex;
    gap: 0.5rem;

    h3 {
      font-size: 1.1rem;
      font-weight: 500;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      margin-bottom: 2rem;
    }
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid ${(props) => props.theme["base-button"]};
      border-radius: 4px;
      background-color: ${(props) => props.theme["base-input"]};
      color: ${(props) => props.theme["base-text"]};

      &:focus {
        border: 1px solid ${(props) => props.theme["yellow-dark"]};
        outline: none;
      }
    }

    input[id="CEP"] {
      max-width: 33%;
    }
  }
`;

export const NumberComplementRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;
`;

export const AreaCityUfRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.65fr 0.35fr;
  gap: 0.5rem;
`;

export const InputWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: red;
  margin-top: 4px; /* Ajuste de margem para espaçar corretamente */
`;

export const PaymentSection = styled.section`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;

  div:first-child {
    display: flex;
    gap: 0.5rem;

    h3 {
      font-size: 1.1rem;
      font-weight: 500;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      margin-bottom: 2rem;
    }
  }
`;

export const PaymentOptionsDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PaymentOptionButton = styled.div`
  width: 100%;
  max-width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 1rem;
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-button"]};

  font-size: 0.75rem;
  white-space: nowrap;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartSummaryDiv = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;

  border-bottom-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
`;

export const CoffeesSelectedBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoffeeCardSummary = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding: 2rem 0;

  &:first-child {
    padding-top: 0.75rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 500;
    padding-bottom: 8px;
  }

  img {
    width: 4rem;
    margin-right: 1rem;
  }

  span {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-weight: 600;
  }
`;

export const CoffeeInfosBox = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }
`;

export const ButtonQuantityDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  padding: 0 6px;
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
    height: 100%;

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
`;

export const ButtonTrashCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  border: 0;
  color: ${(props) => props.theme["base-text"]};
  font-weight: 500;
  padding: 4px 8px;
  gap: 4px;

  font-size: 12px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const CoffeePaymentInfos = styled.div`
  padding-top: 20px;

  div > div {
    display: flex;
    justify-content: space-between;

    padding-bottom: 12px;
  }

  button {
    width: 100%;
    height: 46px;
    margin-top: 12px;
    font-size: 14px;
    font-weight: 500;

    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: ${(props) => props.theme["white"]};
    background-color: ${(props) => props.theme["yellow"]};
    transition: 0.5s;

    &:hover {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

export const TitlePriceInfo = styled.p`
  font-size: 14px;
`;

export const PricesInfo = styled.p`
  font-size: 16px;
`;

export const TotalPricesInfo = styled.span`
  font-size: 18px;
  font-weight: 600;
`;