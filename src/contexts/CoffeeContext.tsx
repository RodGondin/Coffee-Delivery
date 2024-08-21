import { ReactNode, createContext, useState } from "react";

import * as Coffees from "../CoffeImport.ts";

export const CoffeeContext = createContext<CoffeeContextType | undefined>(undefined);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export interface CoffeeItem {
  imgSrc: string;
  type: string[];
  title: string;
  description: string;
  price: number;
}

export interface CoffeeCart {
  coffeeName: string;
  quantity: number;
}

export interface CoffeeContextType {
  CoffeesList: CoffeeItem[];
  cart: CoffeeCart[];
  setCart: React.Dispatch<React.SetStateAction<CoffeeCart[]>>
}

const CoffeesList: CoffeeItem[] = [
  {
    imgSrc: Coffees.Expresso,
    type: ["TRADICIONAL"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90
  },
  {
    imgSrc: Coffees.ExpressoAmericano,
    type: ["TRADICIONAL"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90
  },
  {
    imgSrc: Coffees.ExpressoCremoso,
    type: ["TRADICIONAL"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90
  },
  {
    imgSrc: Coffees.ExpressoGelado,
    type: ["TRADICIONAL", "GELADO"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90
  },
  {
    imgSrc: Coffees.CafeComLeite,
    type: ["TRADICIONAL", "COM LEITE"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90
  },
  {
    imgSrc: Coffees.Latte,
    type: ["TRADICIONAL", "COM LEITE"],
    title: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90
  },
  {
    imgSrc: Coffees.Capuccino,
    type: ["TRADICIONAL", "COM LEITE"],
    title: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90
  },
  {
    imgSrc: Coffees.Macchiato,
    type: ["TRADICIONAL", "COM LEITE"],
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90
  },
  {
    imgSrc: Coffees.Mocaccino,
    type: ["TRADICIONAL", "COM LEITE"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90
  },
  {
    imgSrc: Coffees.ChocolateQuente,
    type: ["ESPECIAL", "COM LEITE"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90
  },
  {
    imgSrc: Coffees.Cubano,
    type: ["ESPECIAL", "ALCÓOLICO", "GELADO"],
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90
  },
  {
    imgSrc: Coffees.Havaiano,
    type: ["ESPECIAL"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90
  },
  {
    imgSrc: Coffees.Arabe,
    type: ["ESPECIAL"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90
  },
  {
    imgSrc: Coffees.Irlandes,
    type: ["ESPECIAL", "ALCÓOLICO"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90
  }
];

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
  const [cart, setCart] = useState<CoffeeCart[]>([]);

  return (
    <CoffeeContext.Provider value={{ CoffeesList, cart, setCart }}>
      {children}
    </CoffeeContext.Provider>
  )
}