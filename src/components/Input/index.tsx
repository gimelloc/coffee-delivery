import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyledContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        return (
            <InputStyledContainer {...props} ref={ref}/>
        )
    }
)