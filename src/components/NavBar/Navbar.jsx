import { Navigation, NavigationLink, NavigationList } from "./NavBar.styled"
export const NavBar=()=>{
    return(
        <Navigation>
                <NavigationList>
                    <li>
                        <NavigationLink href="/">Про клініку</NavigationLink>

                    </li>
                    <li> <NavigationLink href="/">Наші послуги</NavigationLink></li>
                    <li><NavigationLink href="/">Прайс</NavigationLink></li>
                    <li><NavigationLink href="/">Наші лікарі</NavigationLink></li>
                    <li><NavigationLink href="/">Акції</NavigationLink></li>
                </NavigationList>
            </Navigation>
    )
}