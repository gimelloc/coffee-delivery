import { AddressFormContainer, FormContainer, FormSectionContainer, PaymentOptionsContainer } from "./styles";
import { useFormContext } from 'react-hook-form';
import { RegularText, TitleText } from "../../../../components/Typography";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { Input } from "../../../../components/Input";
import { PaymentInput } from "../PaymentInput";


export const paymentMethods = {
    credit: {
        label: "Cartão de Crédito",
        icon: <CreditCard size={16}/>,
    },
    debit: {
        label: "Cartão de Débito",
        icon: <Bank size={16}/>,
    },
    money: {
        label: "Dinheiro",
        icon: <Money size={16}/>,
    },
};


export function AddressForm(){

    const { colors } = useTheme();

    const { register, formState: { errors } } = useFormContext();

    const paymentMethodError = errors?.paymentMethods?.message as unknown as string;

    return (
        <AddressFormContainer className="container">

            <TitleText size="xs" color="subtitle">Complete seu pedido</TitleText>

            <FormSectionContainer>
            <div className="principal-div">
            <MapPinLine size={20} color={colors['yellow-dark']}/>
            <div>
            <RegularText size="m" color="subtitle">Endereço de Entrega</RegularText>
            <RegularText size="s" color="subtitle">Informe o endereço onde deseja receber seu pedido</RegularText>
            </div>
            </div>

            
            <FormContainer>
                <Input required placeholder="CEP" type="number" className="cep" {...register('cep')}/>
                <Input required placeholder="Rua" className="street" {...register('rua')}/>
                <Input required placeholder="Número" type="number" {...register('numero')}/>
                <Input placeholder="Complemento (Opcional)" className="complement" {...register('complemento')}/>
                <Input required placeholder="Bairro" {...register('bairro')}/>
                <Input required placeholder="Cidade" {...register('cidade')}/>
                <Input required placeholder="UF" {...register('uf')}/>
            </FormContainer>
            </FormSectionContainer>


            <FormSectionContainer >
            <div className="principal-div">
            <CurrencyDollar size={20} color={colors['purple']}/>
            <div>
            <RegularText size="m" color="subtitle">Pagamento</RegularText>
            <RegularText size="s" color="subtitle">O pagamento é feito na entrega. Escolha a forma que deseja pagar</RegularText>
            </div>
            </div>

            <PaymentOptionsContainer>
                {Object.entries(paymentMethods).map(([key, {label, icon}]) => (
                    <PaymentInput
                    key={label}
                    id={key}
                    icon={icon}
                    label={label}
                    value={key}
                    {...register("paymentMethod")}
                    />
                ))}
                {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
            </PaymentOptionsContainer>
            </FormSectionContainer>
        </AddressFormContainer>
    );
    
}