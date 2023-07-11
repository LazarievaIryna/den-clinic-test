import { Link } from "./Additionally.styled"
import Img from '../../img/carbon_license.png'
import{Wrapper, ImgCard} from './Additionally.styled'

export const Additionally=()=>{
    return(
        <Wrapper>
            <Link to="/license" >
                <ImgCard src={Img} alt="license"/>
            Ліцензія на стоматологічну практику
          </Link>
          <Link to="/staff" >
          <ImgCard src={Img} alt="license"/>
          Медичний персонал<br/> стоматології
          </Link>
          <Link to="/registration" >
          <ImgCard src={Img} alt="license"/>
          Реєстрація стомат-бізнесу
          </Link>
          
        </Wrapper>
    )
}