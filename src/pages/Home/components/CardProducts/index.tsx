import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCardWrapper, CardFooter, CardProductsContainer, Description, Name, Tags } from "./styles";

export interface Coffee{
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps{
    coffee: Coffee;
}

export function CardProducts({ coffee }: CoffeeProps){
    const [ quantity, setQuantity ] = useState(1);

    function handleIncrease(){
        setQuantity((state) => state + 1)
    }

    function handleDecrease(){
        setQuantity((state) => state - 1)
    }

    const { addCoffeeToCart } = useCart();

    function handleAddToCart(){
        const coffeeToAdd = {
            ...coffee,
            quantity: 1
        }
        addCoffeeToCart(coffeeToAdd);
    }


    const formattedPrice = formatMoney(coffee.price);

    return(
        <CardProductsContainer>
            <img src={`/coffees/${coffee.photo}`}/>

        <Tags>
            {coffee.tags.map( (tag) => (
                <span key={`${coffee.id}${tag}`}>{tag}</span>
            ))}
        </Tags>

        <Name>{coffee.name}</Name>
        <Description>{coffee.description}</Description>

        <CardFooter>
            <div>
                <RegularText size="s">R$</RegularText>
                <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
            </div>

            <AddCardWrapper>
                <QuantityInput 
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={quantity}
                />
                <button onClick={handleAddToCart}>
                    <ShoppingCart size={22} weight="fill"/>
                </button>
            </AddCardWrapper>

        </CardFooter>
        </CardProductsContainer>
    )
}