import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.3rem 10rem;

  img {
    max-width: 50%;
    margin-top: 6rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

export const SuccessMessage = styled.div`
  h1 {
    font-family: "Baloo 2", "Roboto", sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 2rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;
  border-radius: 6px 36px;
  background-image: linear-gradient(45deg, ${(props) => props.theme['yellow']}, ${(props) => props.theme['purple']});
  padding: 1px;
  
  > div {
    background-color: ${(props) => props.theme['background']};
    border-radius: 6px 36px;
    padding: 2.5rem;
  }
`;



export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
  }
`;

export const IconWrapper = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme['white']};
  border-radius: 50%;
  padding: 0.5rem;
`;
