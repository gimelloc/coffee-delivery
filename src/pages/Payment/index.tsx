import { AddressForm } from "./components/Address";
import { SelectedCoffees } from "./components/SelectedCoffee";
import { PaymentContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";


enum PaymentMethods{
    credit = "credit",
    debit= "debit",
    money= "money",
}

const confirmFormValidationSchema = zod.object({
    cep: zod.string(),
    rua: zod.string(),
    numero: zod.string(),
    complemento: zod.string(),
    bairro: zod.string(),
    cidade: zod.string(),
    uf: zod.string(),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap:() => {
            return { message: "Informe o método de pagamento" }
        }
    }),

});

export type FormData = zod.infer<typeof confirmFormValidationSchema>; 

type ConfirmFormData = FormData;

export function Payment(){
    const confirmForm = useForm<ConfirmFormData>({
        resolver: zodResolver(confirmFormValidationSchema),
    });

    const { handleSubmit } = confirmForm;

    const navigate = useNavigate();
    const { cleanCart } = useCart();

    function handleConfirmForm(data: ConfirmFormData){
        navigate("/Delivery", {
            state: data,
        });
        cleanCart();
    }

    return(
        <FormProvider {...confirmForm}>
        <PaymentContainer className="container" onSubmit={handleSubmit(handleConfirmForm)}>
        <AddressForm/>
        <SelectedCoffees/>
        </PaymentContainer>
        </FormProvider>
    )
}