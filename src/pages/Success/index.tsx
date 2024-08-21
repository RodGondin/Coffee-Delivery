import { useLocation } from 'react-router-dom';
import {
  SuccessContainer,
  SuccessMessage,
  OrderDetails,
  OrderItem,
  IconWrapper,
} from './styles';
import SucessDelivery from "../../assets/Success-image.svg";
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react';

export function Success() {
  const location = useLocation();
  const { addressData, paymentType } = location.state || {};

  return (
    <SuccessContainer>
      <div>
        <SuccessMessage>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </SuccessMessage>

        <OrderDetails>
          <div>
            <OrderItem>
              <IconWrapper color="purple">
                <MapPin size={24} weight='fill' />
              </IconWrapper>
              <div>
                <p>
                  Entrega em <strong>{`${addressData.Rua}, ${addressData.Numero}`}</strong>
                </p>
                <p>{`${addressData.Bairro} - ${addressData.Cidade}, ${addressData.UF}`}</p>
              </div>
            </OrderItem>

            <OrderItem>
              <IconWrapper color="yellow">
                <Timer size={24} weight='fill' />
              </IconWrapper>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </OrderItem>

            <OrderItem>
              <IconWrapper color="yellow-dark">
                <CurrencyDollar size={24} />
              </IconWrapper>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{paymentType}</strong>
              </div>
            </OrderItem>
          </div>
        </OrderDetails>

      </div>

      <img src={SucessDelivery} alt="Entrega em andamento" />
    </SuccessContainer>
  );
}
