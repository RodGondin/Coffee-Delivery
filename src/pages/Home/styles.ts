import styled from "styled-components";

export const UpperHomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 5.3rem;
  gap: 3.5rem;
`

export const TitlesUpperPart = styled.div`
  max-width: 470px;
  margin-bottom: 66px;

  h1 {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 38px;
    line-height: 48px;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 18px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
  }
`

export const BenefitsUpperPart = styled.section`
`

export const ImageContainerUpperPart = styled.div`
`