import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { PaymentInputContainer, ContentContainer } from "./styles";

type PaymentInputProps = InputHTMLAttributes<HTMLInputElement> &{
    icon: ReactNode;
    label: string;
}

export const PaymentInput = forwardRef<
HTMLInputElement, PaymentInputProps
>(({id, icon, label, ...props}, ref) =>{
    return(
        <PaymentInputContainer>
            <input id={id} type="radio" {...props} name="paymentMethod" ref={ref}/>
            <label htmlFor={id}>
            <ContentContainer>
                {icon}
                {label}
            </ContentContainer>
            </label>
        </PaymentInputContainer>
    )
})