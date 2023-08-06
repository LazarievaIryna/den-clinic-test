import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from "./SharedLayout/SharedLayout";
import {Home} from './Home/Home'
import { AboutClinic } from './AboutClinic/AboutClinic';
import { ServiceFirst } from './ServicesList/ServiceFirst';
import { ServiceSecond } from './ServicesList/ServiceSecond';
import { ServiceThird } from './ServicesList/ServiceThird';
import { PriceNavbar } from './PriceNavbar/PriceNavbar';
import { Staff } from './Staff/Staff';
import { Promotion } from './Promotion/Promotion';
import { License } from './License/License';
import { Registration } from './Registration/Registration';
import { Services } from './Services/Services';

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
      <Route index element={<Home />} />
        <Route path="/aboutclinic" element={<AboutClinic/>}/>
        <Route path="/servicefirst" element={<ServiceFirst/>} />
        <Route path="/servicesecond" element={<ServiceSecond/>} />
        <Route path="/servicethird" element={<ServiceThird/>} />
        <Route path="/pricenavbar" element={<PriceNavbar/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/promotion" element={<Promotion/>} />

        <Route path="/license" element={<License/>} />
        {/* <Route path="/promotion" element={<Promotion/>} /> */}
        <Route path="/registration" element={<Registration/>} />
        <Route path="/services" element={<Services/>} />
       
      </Route>
    </Routes>
    </>
  );
};
