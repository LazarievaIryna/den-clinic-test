import * as React from 'react';
import { Navigation, NavigationLink, NavigationList, DropDown, Link } from "./NavBar.styled"
// import { ServiceFirst } from 'components/ServicesList/ServiceFirst';
export const NavBar=()=>{
  const [isDropdownVisible, setIsDropdownVisible] = React.useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };
   
    return(
        <Navigation >
                <NavigationList >
                    <li>
                        <NavigationLink to="/aboutclinic" >Про клініку</NavigationLink>

                    </li>

                    <li> 
                    <div >
      <NavigationLink onMouseEnter={handleMouseEnter} >Наші послуги</NavigationLink>
       
        {isDropdownVisible && (<DropDown  onMouseLeave={handleMouseLeave} >
          <li >
            <Link to="/servicefirst"  onClick={handleMouseLeave}>Послуга 1</Link>
          </li>
          <li >
            <Link to="/servicesecond"  onClick={handleMouseLeave}>Послуга 2</Link>
          </li>
          <li >
            <Link to="/servicethird" onClick={handleMouseLeave}>Послуга 3</Link>
          </li>
        </DropDown>)}
     
      
    </div>
                        </li>

                    <li><NavigationLink to="/pricenavbar">Прайс</NavigationLink></li>
                    <li><NavigationLink to="/staff">Наші лікарі</NavigationLink></li>
                    <li><NavigationLink to="/promotion">Акції</NavigationLink></li>
                </NavigationList>
            </Navigation>
    )
}