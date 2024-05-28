import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";

export function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="Logo Coffee Delivery" />
      </NavLink>
      <nav>
        <span><MapPin size={20} color={theme['purple-dark']} weight="fill" />Porto Alegre, RS</span>
        <NavLink to="/cart" title="Carrinho"><ShoppingCart size={20} color={theme['yellow-dark']} weight="fill" /></NavLink>
      </nav>
    </HeaderContainer>
  )
}
