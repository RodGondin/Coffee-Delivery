import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";
import { AddressPaymentBox, AddressSection, AreaCityUfRow, ButtonQuantityDiv, ButtonTrashCart, CartContainer, CartSummary, CartSummaryDiv, CoffeeCardSummary, CoffeeInfosBox, CoffeePaymentInfos, CoffeesSelectedBox, NumberComplementRow, PaymentOptionButton, PaymentOptionsDiv, PaymentSection, PricesInfo, TitlePriceInfo, TitlesSections, TotalPricesInfo } from "./styles";
import { useTheme } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext, CoffeeContextType } from "../../contexts/CoffeeContext";

export function Cart() {
  const theme = useTheme();
  const { cart, setCart, CoffeesList } = useContext(CoffeeContext) as CoffeeContextType;
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const newTotalValue = cart.reduce((acc, item) => {
      const coffeeDetails = CoffeesList.find(
        (coffee) => coffee.title.toLowerCase() === item.coffeeName.toLowerCase()
      );
      if (coffeeDetails) {
        return acc + coffeeDetails.price * item.quantity;
      }
      return acc;
    }, 0);

    setTotalValue(newTotalValue);
  }, [cart, CoffeesList]);

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
            {cart.map((item, index) => {
              const coffeeDetails = CoffeesList.find(
                (coffee) => coffee.title.toLowerCase() === item.coffeeName.toLowerCase()
              );

              const handleRemoveItem = () => {
                setCart(cart.filter((cartItem) => cartItem.coffeeName !== item.coffeeName));
              };

              const handleAddItemQuantity = () => {
                setCart(cart.map((cartItem) =>
                  cartItem.coffeeName === item.coffeeName
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
                ));
              };

              const handleSubItemQuantity = () => {
                setCart(cart.map((cartItem) =>
                  cartItem.coffeeName === item.coffeeName && cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
                ));
              };

              return (
                <CoffeeCardSummary key={index}>
                  {coffeeDetails && <img src={coffeeDetails.imgSrc} alt={item.coffeeName} />}
                  <CoffeeInfosBox>
                    <p>{item.coffeeName}</p>
                    <div>
                      <ButtonQuantityDiv>
                        <button onClick={handleSubItemQuantity}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={handleAddItemQuantity}>+</button>
                      </ButtonQuantityDiv>
                      <ButtonTrashCart onClick={handleRemoveItem}>
                        <Trash size={16} color={theme['purple']} />
                        REMOVER
                      </ButtonTrashCart>
                    </div>
                  </CoffeeInfosBox>
                  {coffeeDetails && <span>R$ {coffeeDetails.price.toFixed(2)}</span>}
                </CoffeeCardSummary>
              );
            })}
          </CoffeesSelectedBox>

          <CoffeePaymentInfos>
            <div>
              <div>
                <TitlePriceInfo>Total de itens</TitlePriceInfo>
                <PricesInfo>R$ {totalValue.toFixed(2).replace(".", ",")}</PricesInfo>
              </div>
              <div>
                <TitlePriceInfo>Entrega</TitlePriceInfo>
                <PricesInfo>R$ 3,50</PricesInfo>
              </div>
              <div>
                <TotalPricesInfo>Total</TotalPricesInfo>
                <TotalPricesInfo>R$ {(totalValue + 3.50).toFixed(2).replace(".", ",")}</TotalPricesInfo>
              </div>
            </div>
            <button>CONFIRMAR PEDIDO</button>
          </CoffeePaymentInfos>


        </CartSummaryDiv>
      </CartSummary>

    </CartContainer >
  )
}
