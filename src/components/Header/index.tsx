import { HeaderButton, HeaderContainer, HeaderButtonContainer } from "./styles";
import logoSite from '../../assets/logo-coffee.svg'
import { ShoppingCart, Coffee } from 'phosphor-react';
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header(){
const { cartQuantity } = useCart();
    return(
        <HeaderContainer>
        <div className="container">
        <NavLink to="/">
        <img src={logoSite} alt="Logo do Site" />
        </NavLink>

        <HeaderButtonContainer>
        <HeaderButton>
            <Coffee size={20} weight="fill"/>
            Sobre nós
        </HeaderButton>
        <NavLink to="/Payment">
        <HeaderButton>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={20} weight="fill"/>
        </HeaderButton>
        </NavLink>
        </HeaderButtonContainer>
        </div>
        </HeaderContainer>
        
    )
}