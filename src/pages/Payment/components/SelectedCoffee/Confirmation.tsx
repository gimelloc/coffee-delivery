import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection(){

    const { ItemsTotal, cartQuantity } = useCart();

    const cartTotal = DELIVERY_PRICE + ItemsTotal;

    const formattedItemsTotal = formatMoney(ItemsTotal);
    const formattedCartTotal = formatMoney(cartTotal);
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

    return(
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total de Itens</RegularText>
                <RegularText>R$ {formattedItemsTotal}</RegularText>
            </div>
            <div>
                <RegularText size="s">Entrega</RegularText>
                <RegularText>R$ {formattedDeliveryPrice}</RegularText>
            </div>
            <div>
                <RegularText weight="700" size="l" color="subtitle">Total de Itens</RegularText>
                <RegularText weight="700" size="l" color="subtitle">R$ {formattedCartTotal}</RegularText>
            </div>


            <Button text="Confirmar pedido" disabled={cartQuantity <= 0} type="submit"/>

        </ConfirmationSectionContainer>
    )
}