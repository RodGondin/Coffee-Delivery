import BigCoffee from "../../assets/Big-coffee.svg";
import Expresso from "../../assets/coffees/Expresso.svg";
import { Coffee, Package, ShoppingCart, ShoppingCartSimple, Timer } from "@phosphor-icons/react";
import { BenefitsUpperPart, BottomHomeContainer, CoffeeCard, DescriptionLabel, IconContainer1, IconContainer2, IconContainer3, IconContainer4, ImageContainerUpperPart, MainCoffeesContainer, Price, ShoppingInfos, TitlesUpperPart, TypeSpan, UpperHomeContainer } from "./styles";

export function Home() {
  return (
    <>
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

      <BottomHomeContainer>
        <h1>Nossos cafés</h1>
        <MainCoffeesContainer>
          <CoffeeCard>
            <img src={Expresso} alt="Coffee photo" />
            <TypeSpan>TRADICIONAL</TypeSpan>
            <h3>Expresso Tradicional</h3>
            <DescriptionLabel>O tradicional café feito com água quente e grãos moídos</DescriptionLabel>
            <ShoppingInfos>
              <div>
                <span>R$</span>
                <Price>9,90</Price>
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
          </CoffeeCard>
        </MainCoffeesContainer>
      </BottomHomeContainer>
    </>
  )
}
