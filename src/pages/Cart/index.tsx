import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";
import {
  AddressPaymentBox,
  AddressSection,
  AreaCityUfRow,
  ButtonQuantityDiv,
  ButtonTrashCart,
  CartContainer,
  CartSummary,
  CartSummaryDiv,
  CoffeeCardSummary,
  CoffeeInfosBox,
  CoffeePaymentInfos,
  CoffeesSelectedBox,
  ErrorMessage,
  InputWrapper,
  NumberComplementRow,
  PaymentOptionButton,
  PaymentOptionsDiv,
  PaymentSection,
  PricesInfo,
  TitlePriceInfo,
  TitlesSections,
  TotalPricesInfo
} from "./styles";
import { useTheme } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext, CoffeeContextType } from "../../contexts/CoffeeContext";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const addressSchema = z.object({
  CEP: z
    .string()
    .min(1, "O campo CEP é obrigatório")
    .regex(/^\d{5}-\d{3}$/, "CEP inválido"),
  Rua: z.string().min(1, "O campo Rua é obrigatório"),
  Numero: z.string().min(1, "O campo Número é obrigatório"),
  Complemento: z.string().optional(),
  Bairro: z.string().min(1, "O campo Bairro é obrigatório"),
  Cidade: z.string().min(1, "O campo Cidade é obrigatório"),
  UF: z
    .string()
    .min(2, "UF deve ter 2 caracteres")
    .max(2, "UF deve ter 2 caracteres"),
});

type AddressFormData = z.infer<typeof addressSchema>;

export function Cart() {
  const theme = useTheme();
  const { cart, setCart, CoffeesList } = useContext(CoffeeContext) as CoffeeContextType;
  const [totalValue, setTotalValue] = useState(0);

  const { handleSubmit, register, reset, formState: { errors } } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
  });

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

  function onSubmitHandle(data: AddressFormData) {
    console.log("Dados do formulário:", data);
    // Passar para tela de confirmação
    reset();
  }

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

          <form onSubmit={handleSubmit(onSubmitHandle)}>
            <InputWrapper>
              <input type="text" id="CEP" placeholder="CEP" {...register('CEP')} />
              {errors.CEP && <ErrorMessage>{errors.CEP.message}</ErrorMessage>}
            </InputWrapper>

            <InputWrapper>
              <input type="text" id="Rua" placeholder="Rua" {...register('Rua')} />
              {errors.Rua && <ErrorMessage>{errors.Rua.message}</ErrorMessage>}
            </InputWrapper>

            <NumberComplementRow>
              <InputWrapper>
                <input type="text" id="Numero" placeholder="Número" {...register('Numero')} />
                {errors.Numero && <ErrorMessage>{errors.Numero.message}</ErrorMessage>}
              </InputWrapper>

              <InputWrapper>
                <input type="text" id="Complemento" placeholder="Complemento" {...register('Complemento')} />
                {errors.Complemento && <ErrorMessage>{errors.Complemento.message}</ErrorMessage>}
              </InputWrapper>
            </NumberComplementRow>

            <AreaCityUfRow>
              <InputWrapper>
                <input type="text" id="Bairro" placeholder="Bairro" {...register('Bairro')} />
                {errors.Bairro && <ErrorMessage>{errors.Bairro.message}</ErrorMessage>}
              </InputWrapper>

              <InputWrapper>
                <input type="text" id="Cidade" placeholder="Cidade" {...register('Cidade')} />
                {errors.Cidade && <ErrorMessage>{errors.Cidade.message}</ErrorMessage>}
              </InputWrapper>

              <InputWrapper>
                <input type="text" id="UF" placeholder="UF" {...register('UF')} />
                {errors.UF && <ErrorMessage>{errors.UF.message}</ErrorMessage>}
              </InputWrapper>
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
            <button onClick={handleSubmit(onSubmitHandle)}>CONFIRMAR PEDIDO</button>
          </CoffeePaymentInfos>


        </CartSummaryDiv>
      </CartSummary>

    </CartContainer >
  )
}
