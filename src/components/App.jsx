import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from "./SharedLayout/SharedLayout";
import {Home} from './Home/Home'
import { AboutClinic } from './AboutClinic/AboutClinic';

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
      <Route index element={<Home />} />
        <Route path="/aboutclinic" element={<AboutClinic/>}/>
      </Route>
    </Routes>
    </>
  );
};
