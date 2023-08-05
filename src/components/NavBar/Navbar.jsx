import * as React from 'react';
import { Navigation, NavigationLink, NavigationList, DropDown, Link } from "./NavBar.styled"
export const NavBar=()=>{
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
    return(
        <Navigation>
                <NavigationList>
                    <li>
                        <NavigationLink to="/aboutclinic">Про клініку</NavigationLink>

                    </li>

                    <li> 
                    <div >
      <NavigationLink onClick={handleOpen}>Наші послуги</NavigationLink>
      {open ? (
        <DropDown >
          <li >
            <Link>Послуга 1</Link>
          </li>
          <li >
            <Link>Послуга 2</Link>
          </li>
          <li >
            <Link>Послуга 3</Link>
          </li>
        </DropDown>
      ) : null}
      
    </div>
                        </li>

                    <li><NavigationLink href="/">Прайс</NavigationLink></li>
                    <li><NavigationLink href="/">Наші лікарі</NavigationLink></li>
                    <li><NavigationLink href="/">Акції</NavigationLink></li>
                </NavigationList>
            </Navigation>
    )
}