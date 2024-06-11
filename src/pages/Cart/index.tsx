import { MapPinLine } from "@phosphor-icons/react";
import { AddressPaymentBox, AddressSection, AreaCityUfRow, CartContainer, CartSummary, NumberComplementRow, PaymentSection, TitlesSections } from "./styles";
import { useTheme } from "styled-components";

export function Cart() {
  const theme = useTheme();

  return (
    <CartContainer>

      <AddressPaymentBox>
        <TitlesSections>Complete seu pedido</TitlesSections>

        <AddressSection>
          <div>
            <span><MapPinLine size={24} color={theme['yellow-dark']} /></span>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <form>
            <input type="text" name="CEP" placeholder="CEP" />
            <input type="text" name="Rua" placeholder="Rua" />
            <NumberComplementRow>
              <input type="text" name="Numero" placeholder="Número" />
              <input type="text" name="Complemento" placeholder="Complemento" />
            </NumberComplementRow>
            <AreaCityUfRow>
              <input type="text" name="Bairro" placeholder="Bairro" />
              <input type="text" name="Cidade" placeholder="Cidade" />
              <input type="text" name="UF" placeholder="UF" />
            </AreaCityUfRow>
          </form>
        </AddressSection>

        <PaymentSection>
          <h2>Pagamento</h2>
        </PaymentSection>
      </AddressPaymentBox>

      <CartSummary>
        <TitlesSections>Cafés selecionados</TitlesSections>

        <section>
          café
        </section>
      </CartSummary>

    </CartContainer>
  )
}
