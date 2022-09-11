import banner from '../../../../../src/assets/banner.svg'
import { BannerContainer, BannerContent, BannerTitle, BenefitsContainer } from "./styles";
import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'


export function Banner(){
    const { colors } = useTheme();

        return(
        <BannerContainer>
            <BannerContent className='container'>
                <div>
                <section>
                    <BannerTitle size='xl'>
                    Encontre o café perfeito para qualquer hora do dia
                    </BannerTitle>

                    <RegularText size='l' color='subtitle' as="h3">
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </RegularText>
                </section>

                    <BenefitsContainer>
                        <InfoWithIcon
                        iconBg={colors['yellow-dark']}
                        icon={<ShoppingCart weight="fill" />}
                        text="Compra simples e segura"
                        />
                        <InfoWithIcon
                        iconBg={colors['base-text']}
                        icon={<Package weight="fill" />}
                        text="Embalagem mantém o café intacto"
                        />
                        <InfoWithIcon
                        iconBg={colors['yellow']}
                        icon={<Timer weight="fill" />}
                        text="Entrega rápida e rastreada"
                        />
                        <InfoWithIcon
                        iconBg={colors['purple']}
                        icon={<Coffee weight="fill" />}
                        text="O café chega fresquinho até você"
                        />
                    </BenefitsContainer>
                </div>

                <img src={banner}/>
            </BannerContent>
        </BannerContainer>

)}