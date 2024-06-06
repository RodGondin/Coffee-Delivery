import { useContext, useState } from "react";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { CoffeeCardContainer, DescriptionLabel, Price, ShoppingInfos, TypeDiv, TypeSpan } from "./styles";
import { CoffeeCart, CoffeeContext, CoffeeContextType } from "../../../../contexts/CoffeeContext";

interface CoffeeCardProps {
  imgSrc: string;
  type: string[];
  title: string;
  description: string;
  price: string;
}

export function CoffeeCard({ imgSrc, type, title, description, price }: CoffeeCardProps) {
  const { cart, setCart } = useContext(CoffeeContext) as CoffeeContextType;
  const [coffeeAmount, setCoffeeAmount] = useState(0);

  function decrisingAmount() {
    if (coffeeAmount > 0) {
      setCoffeeAmount(state => state - 1);
    }
  }

  function addAmount() {
    setCoffeeAmount(state => state + 1);
  }

  function addToCart() {
    if (coffeeAmount > 0) {
      const coffeeSelected: CoffeeCart = { coffeeName: title, quantity: coffeeAmount };
      const cartWithCoffeeSelected = [...cart, coffeeSelected];
      setCart(cartWithCoffeeSelected);
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={imgSrc} alt="Coffee photo" />
      <TypeDiv>
        {type.map((type, index) => (
          <TypeSpan key={index}>{type}</TypeSpan>
        ))}
      </TypeDiv>
      <h3>{title}</h3>
      <DescriptionLabel>{description}</DescriptionLabel>
      <ShoppingInfos>
        <div>
          <span>R$</span>
          <Price>{price}</Price>
        </div>
        <div>
          <button onClick={decrisingAmount}>-</button>
          <p>{coffeeAmount}</p>
          <button onClick={addAmount}>+</button>
        </div>
        <button onClick={addToCart}>
          <ShoppingCartSimple size={20} color="white" weight="fill" />
        </button>
      </ShoppingInfos>
    </CoffeeCardContainer>
  )
}