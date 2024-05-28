import BigCoffee from "../../assets/Big-coffee.svg";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { BenefitsUpperPart, ImageContainerUpperPart, TitlesUpperPart, UpperHomeContainer } from "./styles";

export function Home() {
  return (
    <UpperHomeContainer>
      <div>
        <TitlesUpperPart>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
        </TitlesUpperPart>
        <BenefitsUpperPart>
          <div>
            <span><ShoppingCart size={20} color="black" weight="fill" /></span>
            <p>Compra Simples e segura</p>
          </div>
          <div>
            <span><Package size={20} color="black" weight="fill" /></span>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <span><Timer size={20} color="black" weight="fill" /></span>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <span><Coffee size={20} color="black" weight="fill" /></span>
            <p>O café chega fresquinho até você</p>
          </div>
        </BenefitsUpperPart>
      </div>
      <ImageContainerUpperPart>
        <img src={BigCoffee} alt="A big coffee image, with the logo of the company Coffee Delivery" />
      </ImageContainerUpperPart>
    </UpperHomeContainer>
  )
}
