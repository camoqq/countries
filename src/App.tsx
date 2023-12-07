// import Header1 from "./form/Header1";
// import pic2 from "./assets/places.png";
// import { useState } from "react";
// import BottomParent from "./form/BottomParent";
// import EnterData from "./form/EnterData";
import Countries from "./countries/Countries";
import FormMain from "./form/FormMain";

// export type stateType = {
//   id: number;
//   title: string;
//   desc: string;
// };

const App1 = () => {
  return (
    <div className="parent">
      <FormMain />
      <Countries />
    </div>
  );
};

export default App1;
