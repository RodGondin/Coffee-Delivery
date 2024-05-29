import styled from "styled-components";

export const UpperHomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 5.3rem;
  padding-bottom: 5.3rem;
  gap: 3.5rem;
`

export const TitlesUpperPart = styled.div`
  max-width: 29.375rem;
  margin-bottom: 66px;

  h1 {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 2.375rem;
    line-height: 3rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 18px;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 400;
  }
`

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
`

const IconContainerBase = styled.span`
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

export const IconContainer1 = styled(IconContainerBase)`
  background-color: ${(props) => props.theme['yellow-dark']};
`;

export const IconContainer2 = styled(IconContainerBase)`
  background-color: ${(props) => props.theme['base-text']};
`;

export const IconContainer3 = styled(IconContainerBase)`
  background-color: ${(props) => props.theme['yellow']};
`;

export const IconContainer4 = styled(IconContainerBase)`
  background-color: ${(props) => props.theme['purple']};
`;

export const ImageContainerUpperPart = styled.div`
   img {
    width: 100%;
    height: auto;
  }
`