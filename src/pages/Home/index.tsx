import { useContext } from "react";
import BigCoffee from "../../assets/Big-coffee.svg";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { BenefitsUpperPart, BottomHomeContainer, IconContainer1, IconContainer2, IconContainer3, IconContainer4, ImageContainerUpperPart, MainCoffeesContainer, TitlesUpperPart, UpperHomeContainer } from "./styles";

import * as Coffees from "../../CoffeImport.ts";
import { CoffeeCard } from "./components/CoffeeCard/index.tsx";
import { CoffeeContext, CoffeeItem } from "../../contexts/CoffeeContext.tsx";

export function Home() {
  const context = useContext(CoffeeContext);

  if (!context) {
    return <div>Loading...</div>;
  } else {

    const { CoffeesList } = context;

    console.log(CoffeesList);
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
            {CoffeesList.map((coffee: CoffeeItem) => (
              <CoffeeCard
                key={coffee.title}
                imgSrc={coffee.imgSrc}
                type={coffee.type}
                title={coffee.title}
                description={coffee.description}
                price={coffee.price.toFixed(2)}
              />
            ))}
          </MainCoffeesContainer>
        </BottomHomeContainer>
      </>
    )
  }
}
