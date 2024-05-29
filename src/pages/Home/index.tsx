import BigCoffee from "../../assets/Big-coffee.svg";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { BenefitsUpperPart, IconContainer1, IconContainer2, IconContainer3, IconContainer4, ImageContainerUpperPart, TitlesUpperPart, UpperHomeContainer } from "./styles";

export function Home() {
  return (
    <UpperHomeContainer>
      <div>
        <TitlesUpperPart>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
        </TitlesUpperPart>
        <BenefitsUpperPart>
          <section>
            <div>
              <IconContainer1><ShoppingCart size={20} color="white" weight="fill" /></IconContainer1>
              <p>Compra Simples e segura</p>
            </div>
            <div>
              <IconContainer2><Package size={20} color="white" weight="fill" /></IconContainer2>
              <p>Embalagem mantém o café intacto</p>
            </div>
          </section>
          <section>
            <div>
              <IconContainer3><Timer size={20} color="white" weight="fill" /></IconContainer3>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <IconContainer4><Coffee size={20} color="white" weight="fill" /></IconContainer4>
              <p>O café chega fresquinho até você</p>
            </div>
          </section>
        </BenefitsUpperPart>
      </div>
      <ImageContainerUpperPart>
        <img src={BigCoffee} alt="A big coffee image, with the logo of the company Coffee Delivery" />
      </ImageContainerUpperPart>
    </UpperHomeContainer>
  )
}
