import styled from "styled-components";

export const UpperHomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5.3rem 10rem;
  padding-top: 5.3rem;
  padding-bottom: 5.3rem;
  gap: 3.5rem;
`;

export const TitlesUpperPart = styled.div`
  max-width: 29.375rem;
  margin-bottom: 66px;

  h1 {
    font-family: "Baloo 2", "Roboto", sans-serif;
    font-size: 2.375rem;
    line-height: 3rem;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 18px;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 400;
  }
`;

export const BenefitsUpperPart = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  section {
    display: flex;
    gap: 2.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
`;

const IconContainerBase = styled.span`
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

export const IconContainer1 = styled(IconContainerBase)`
  background-color: ${(props) => props.theme["yellow-dark"]};
`;

export const IconContainer2 = styled(IconContainerBase)`
  background-color: ${(props) => props.theme["base-text"]};
`;

export const IconContainer3 = styled(IconContainerBase)`
  background-color: ${(props) => props.theme["yellow"]};
`;

export const IconContainer4 = styled(IconContainerBase)`
  background-color: ${(props) => props.theme["purple"]};
`;

export const ImageContainerUpperPart = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

export const BottomHomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3.5rem 10rem;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-family: "Baloo 2", "Roboto", sans-serif;
  }
`;

export const MainCoffeesContainer = styled.main`
  display: flex;
  flex-direction: row;

  padding-top: 3.375rem;
  gap: 2rem;
`;

export const CoffeeCard = styled.div`
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