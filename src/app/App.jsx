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
import Board from "../Board";

const App = () => {
  return (
    // <Dashboard />
    //   <Board/>
    <Routing />
    // <Registration/>
  );
};

export default withProviders(App);
