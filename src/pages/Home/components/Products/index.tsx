import { coffees } from '../../../../data/coffees';
import { TitleText } from '../../../../components/Typography';
import { CardProducts } from '../CardProducts';
import {  CoffeeList, HomeProducts} from './styles'


export function Products(){

    return(
        <HomeProducts className='container'>
            <TitleText size='l' color='subtitle'>Nossos cafés</TitleText>

            <CoffeeList>
                {coffees.map((coffee) => (
                    <CardProducts key={coffee.id} coffee={coffee}/>
                ))}
            </CoffeeList>
        </HomeProducts>
    )
}