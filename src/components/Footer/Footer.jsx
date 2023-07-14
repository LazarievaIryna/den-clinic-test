import {Wrapper, LogoWrapper, Logo, Link, AboutList, LinkList, PromotionWrapper, LicenseWrapper} from './Footer.styled'

import logo from '../../img/fa6-solid_tooth.svg'
import logoText from '../../img/Vector.svg'
import { SocialList } from 'components/SocialList/SocialList'

export const Footer =()=>{
    return(
        <Wrapper>
<LogoWrapper>
                <Logo src={logo} alt="logo"/>
                <img src={logoText} alt="den clinic logo"/>
                  </LogoWrapper>
                  <AboutList>
                    <Link>Про клініку</Link>
                    <Link>Наші послуги</Link>
                  </AboutList>
                  <LinkList>
                    <Link>Прайс</Link>
                    <Link>Наші лікарі</Link>
                  </LinkList>
                  <PromotionWrapper>
                    <Link>Акції</Link>
                  </PromotionWrapper>
                  <SocialList/>
                  <LicenseWrapper>
                    <Link>Ліцензії</Link>
                    <Link>Політика конфіденційності</Link>
                  </LicenseWrapper>


        </Wrapper>
    )
}