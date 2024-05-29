import { ShoppingCartSimple } from "@phosphor-icons/react";
import { CoffeeCardContainer, DescriptionLabel, Price, ShoppingInfos, TypeSpan } from "./styles";

interface CoffeeCardProps {
  imgSrc: string;
  type: string;
  title: string;
  description: string;
  price: string;
}

export function CoffeeCard({ imgSrc, type, title, description, price }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={imgSrc} alt="Coffee photo" />
      <TypeSpan>{type}</TypeSpan>
      <h3>{title}</h3>
      <DescriptionLabel>{description}</DescriptionLabel>
      <ShoppingInfos>
        <div>
          <span>R$</span>
          <Price>{price}</Price>
        </div>
        <div>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <button>
          <ShoppingCartSimple size={20} color="white" weight="fill" />
        </button>
      </ShoppingInfos>
    </CoffeeCardContainer>
  )
}