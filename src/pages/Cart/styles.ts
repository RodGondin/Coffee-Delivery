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
      font-size: 1.08rem;
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
    }

    input[name="CEP"] {
      max-width: 25%;
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

export const PaymentSection = styled.section``;

export const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
