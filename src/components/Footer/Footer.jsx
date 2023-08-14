import {Wrapper, LogoWrapper, Logo, Link, AboutList, LinkList, PromotionWrapper, LicenseWrapper, FooterLinkList} from './Footer.styled'

import logo from '../../img/fa6-solid_tooth.svg'
import logoText from '../../img/Vector.svg'
import { SocialList } from 'components/SocialList/SocialList'

export const Footer =()=>{
    return(
        <Wrapper>
                <LogoWrapper to="/" end>
                <Logo src={logo} alt="logo"/>
                <img src={logoText} alt="den clinic logo"/>
                  </LogoWrapper>
                  <FooterLinkList>
                  <AboutList>
                    <Link to="/aboutclinic">Про клініку</Link>
                    <Link to="/services">Наші послуги</Link>
                  </AboutList>
                  <LinkList>
                    <Link to="/pricenavbar">Прайс</Link>
                    <Link to="/staff">Наші лікарі</Link>
                  </LinkList>
                  <PromotionWrapper>
                    <Link to="/promotion">Акції</Link>
                  </PromotionWrapper>
                  </FooterLinkList>
                  <SocialList fill="#39ADE0"/>
                  <LicenseWrapper>
                    <Link>Ліцензії</Link>
                    <Link>Політика конфіденційності</Link>
                  </LicenseWrapper>


        </Wrapper>
    )
}