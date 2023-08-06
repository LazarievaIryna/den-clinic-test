import * as React from 'react';
import { Navigation, NavigationLink, NavigationList, DropDown, Link } from "./NavBar.styled"
// import { ServiceFirst } from 'components/ServicesList/ServiceFirst';
export const NavBar=()=>{
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
    // console.log(open)
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
            <Link to="/servicefirst" onClick={()=> setOpen(false)}>Послуга 1</Link>
          </li>
          <li >
            <Link to="/servicesecond" onClick={()=> setOpen(false)}>Послуга 2</Link>
          </li>
          <li >
            <Link to="/servicethird" onClick={()=> setOpen(false)}>Послуга 3</Link>
          </li>
        </DropDown>
      ) : null}
      
    </div>
                        </li>

                    <li><NavigationLink to="/pricenavbar">Прайс</NavigationLink></li>
                    <li><NavigationLink to="/staff">Наші лікарі</NavigationLink></li>
                    <li><NavigationLink to="/promotion">Акції</NavigationLink></li>
                </NavigationList>
            </Navigation>
    )
}