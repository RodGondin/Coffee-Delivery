import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { CartAmountSpan, HeaderContainer } from "./styles";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffeeContext, CoffeeContextType } from "../../contexts/CoffeeContext";

export function Header() {
  const { cart } = useContext(CoffeeContext) as CoffeeContextType;
  const theme = useTheme();

  const cartTotalAmount = cart.reduce((total, coffee) => total + coffee.quantity, 0);

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="Logo Coffee Delivery" />
      </NavLink>
      <nav>
        <span><MapPin size={20} color={theme['purple']} weight="fill" />Porto Alegre, RS</span>
        <div>
          <NavLink to="/cart" title="Carrinho"><ShoppingCart size={20} color={theme['yellow-dark']} weight="fill" /></NavLink>
          {cartTotalAmount > 0 && <CartAmountSpan>{cartTotalAmount}</CartAmountSpan>}
        </div>
      </nav>
    </HeaderContainer>
  )
}
