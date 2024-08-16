import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";
import { AddressPaymentBox, AddressSection, AreaCityUfRow, ButtonQuantityDiv, ButtonTrashCart, CartContainer, CartSummary, CartSummaryDiv, CoffeeCardSummary, CoffeeInfosBox, CoffeePaymentInfos, CoffeesSelectedBox, NumberComplementRow, PaymentOptionButton, PaymentOptionsDiv, PaymentSection, PricesInfo, TitlePriceInfo, TitlesSections, TotalPricesInfo } from "./styles";
import { useTheme } from "styled-components";
import { Capuccino } from "../../CoffeImport";

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
          <div>
            <span><CurrencyDollar size={24} color={theme['purple']} /></span>
            <div>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>
          <PaymentOptionsDiv>
            <PaymentOptionButton>
              <span><CreditCard size={20} color={theme['purple']} /></span> CARTÃO DE CRÉDITO
            </PaymentOptionButton>
            <PaymentOptionButton>
              <span><Bank size={20} color={theme['purple']} /></span> CARTÃO DE DÉBITO
            </PaymentOptionButton>
            <PaymentOptionButton>
              <span><Money size={20} color={theme['purple']} /></span> DINHEIRO
            </PaymentOptionButton>
          </PaymentOptionsDiv>
        </PaymentSection>
      </AddressPaymentBox>

      <CartSummary>
        <TitlesSections>Cafés selecionados</TitlesSections>

        <CartSummaryDiv>

          <CoffeesSelectedBox>
            <CoffeeCardSummary>
              <img src={Capuccino} alt="coffee" />
              <CoffeeInfosBox>
                <p>Expresso Tradicional</p>

                <div>
                  <ButtonQuantityDiv>
                    <button>-</button>
                    <p>{1}</p>
                    <button>+</button>
                  </ButtonQuantityDiv>
                  <ButtonTrashCart>
                    <Trash size={16} color={theme['purple']} />
                    REMOVER
                  </ButtonTrashCart>
                </div>

              </CoffeeInfosBox>
              <span>R$ 9,90</span>
            </CoffeeCardSummary>

            <CoffeeCardSummary>
              <img src={Capuccino} alt="coffee" />
              <CoffeeInfosBox>
                <p>Expresso Tradicional</p>

                <div>
                  <ButtonQuantityDiv>
                    <button>-</button>
                    <p>{1}</p>
                    <button>+</button>
                  </ButtonQuantityDiv>
                  <ButtonTrashCart>
                    <Trash size={16} color={theme['purple']} />
                    REMOVER
                  </ButtonTrashCart>
                </div>

              </CoffeeInfosBox>
              <span>R$ 9,90</span>
            </CoffeeCardSummary>
          </CoffeesSelectedBox>

          <CoffeePaymentInfos>
            <div>
              <div>
                <TitlePriceInfo>Total de itens</TitlePriceInfo>
                <PricesInfo>R$ 29,70</PricesInfo>
              </div>
              <div>
                <TitlePriceInfo>Entrega</TitlePriceInfo>
                <PricesInfo>R$ 3,50</PricesInfo>
              </div>
              <div>
                <TotalPricesInfo>Total</TotalPricesInfo>
                <TotalPricesInfo>R$ 33,20</TotalPricesInfo>
              </div>
            </div>
            <button>CONFIRMAR PEDIDO</button>
          </CoffeePaymentInfos>

        </CartSummaryDiv>
      </CartSummary>

    </CartContainer>
  )
}
