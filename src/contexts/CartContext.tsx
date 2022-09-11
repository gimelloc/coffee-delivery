import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CardProducts";
import { produce } from 'immer';

export interface CartItem extends Coffee{
    quantity: number;
}

interface CartContextType{
    cartItems: CartItem[];
    cartQuantity: number;
    addCoffeeToCart:(coffee: CartItem) => void;
    changeItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void;
    removeItem: (cartItemId: number) => void;
    ItemsTotal : number;
    cleanCart: () => void;
}

interface CartContextProviderProps {
    children: ReactNode
}

//Salvar os dados no LocalStorage
const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export const CartContext = createContext ({} as CartContextType);

export function CartContextProvider({
    children,
}: CartContextProviderProps) {

    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
        if(storedCartItems){
            return JSON.parse(storedCartItems);
        }
        return [];
    });

    const cartQuantity = cartItems.length;

    //Valor total dos itens do carrinho

    const ItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
    }, 0)


    //Aumentar a quantidade de item mas não repetir o mesmo item no carrinho
    function addCoffeeToCart(coffee: CartItem){

        //Verifica se o café já está no carrinho
        const coffeeAlreadyExistisInCart = cartItems.findIndex((cartItem) => cartItem.id === coffee.id);

        // com a função produce, é possível mexer sem se importar com a imutabilidade
        const newCart = produce(cartItems, (draft) =>{
            if(coffeeAlreadyExistisInCart < 0 ){
                draft.push(coffee);
            } else{
                draft[coffeeAlreadyExistisInCart].quantity += coffee.quantity;
            }
        });

        setCartItems(newCart);
    }

    // função para alterar a quantidade de item que está no carrinho

    function changeItemQuantity(cartItemId: number, type: 'increase' | 'decrease'){
        const newCart = produce(cartItems, (draft) =>{
            const coffeeExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id === cartItemId
            );

            if(coffeeExistsInCart >= 0){
                const item = draft[coffeeExistsInCart];
                draft[coffeeExistsInCart].quantity = type === "increase" ? item.quantity + 1 : item.quantity - 1;
            }
        });
        setCartItems(newCart);

    }

    // função para remover o item do carrinho

    function removeItem(cartItemId: number){
        const newCart = produce(cartItems, (draft) =>{
            const coffeeExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id === cartItemId
            );

            if(coffeeExistsInCart >= 0){
                draft.splice(coffeeExistsInCart, 1);
            }
        });
            setCartItems(newCart);
    }

    useEffect(() => {
        localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    //função para limpar o carrinho

    function cleanCart(){
        setCartItems([])
    }

    return (
        <CartContext.Provider
        value={{
            cartItems,
            cartQuantity,
            addCoffeeToCart, 
            changeItemQuantity,
            removeItem,
            ItemsTotal,
            cleanCart,
        }}
        >
        {children}
        </CartContext.Provider>
    )
}
