import motoboyImage from '../../assets/motoboy-image.svg'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react';
import { DeliveryContainer, DeliveryDetailsContainer } from "./styles";
import { RegularText, TitleText } from '../../components/Typography';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormData } from '../Payment';
import { paymentMethods } from '../Payment/components/Address';
import { useEffect } from 'react';


interface LocationType{
    state: FormData;
}

export function Delivery(){
    const { colors } = useTheme();

    const { state } = useLocation() as unknown as LocationType;

    const navigate = useNavigate();

    useEffect(() => {
        if(!state){
            navigate("/")
        }
    }, []);

    if(!state) return <></>

    return(
        
        <DeliveryContainer className='container'>
            
            <div>
                <TitleText size='l'>Uhu! Pedido confirmado</TitleText>
                <RegularText size='l' color='subtitle'>Agora é só aguardar que logo o café chegará até você!</RegularText>
            </div>

            <section>
                <DeliveryDetailsContainer>
                <InfoWithIcon
                    icon={<MapPin weight='fill'/>}
                    iconBg={colors['purple']}
                    text={
                        <RegularText>
                            Entrega em <strong>{state.rua}, {state.numero}</strong>
                            <br/>
                            {state.bairro} - {state.cidade}, {state.uf}
                        </RegularText>
                    }
                />
                <InfoWithIcon
                    icon={<Clock weight='fill'/>}
                    iconBg={colors['yellow']}
                    text={
                        <RegularText>
                            Previsão de entrega
                            <br/>
                            <strong>20min - 30min</strong>
                        </RegularText>
                    }
                />
                <InfoWithIcon
                    icon={<CurrencyDollar weight='fill'/>}
                    iconBg={colors['yellow']}
                    text={
                        <RegularText>
                            Pagamento na Entrega
                            <br/>
                            <strong>{paymentMethods[state.paymentMethod].label}</strong>
                        </RegularText>
                    }
                />
                </DeliveryDetailsContainer>
                <img src={motoboyImage}/>
            </section>
        </DeliveryContainer>
    )
}