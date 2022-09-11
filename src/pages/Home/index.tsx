import { HomeContainer } from "./styles";
import { Banner } from "./components/Banner";
import { Products } from "./components/Products";

export function Home(){

    return(
      <HomeContainer>
        <Banner/>
        <Products/>
      </HomeContainer>
    )
}
