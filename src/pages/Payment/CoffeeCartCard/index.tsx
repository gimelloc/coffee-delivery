import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../components/QuantityInput";
import { RegularText } from "../../../components/Typography";
import { CartItem } from "../../../contexts/CartContext";
import { useCart } from "../../../hooks/useCart";
import { formatMoney } from "../../../utils/formatMoney";
import { ActionsContainer, CoffeeCartContainer, RemoveButton } from "./styles";

interface CoffeeCartCardProps{
    coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps){
    const { changeItemQuantity, removeItem } = useCart();

    function handleIncrease(){
        changeItemQuantity(coffee.id, "increase")
    }

    function handleDecrease(){
        changeItemQuantity(coffee.id, "decrease")
    }

    function handleRemove(){
        removeItem(coffee.id);
    }

    const coffeeTotal = coffee.price * coffee.quantity;
    const formattedPrice = formatMoney(coffeeTotal);


    return(
        <CoffeeCartContainer>
        <div>
            <img src={`coffees/${coffee.photo}`}/>
        <div>
            <RegularText>{coffee.name}</RegularText>
            <ActionsContainer>
            <QuantityInput size="small" quantity={coffee.quantity} 
            onIncrease={handleIncrease} onDecrease={handleDecrease} />
            <RemoveButton onClick={handleRemove}>
            <Trash size={16}/>
           REMOVER
            </RemoveButton>
            </ActionsContainer>
        </div>
        </div>

            <p>
            R$ {formattedPrice}
            </p>
        </CoffeeCartContainer>
);
}