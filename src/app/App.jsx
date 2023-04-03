// import React from 'react';
// import './styles/App.css';
// import Registration from "../pages/Registration";
//
// function App() {
//   return (
//       <Registration/>
//   );
// }
//
// export default App;

import { withProviders } from "./providers";
import {Routing} from "../pages";

const App = () => {
  return (
    <Routing />
  );
};

export default withProviders(App);
