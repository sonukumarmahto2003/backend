import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  const [togggle, setTogggle] = useState(true);

  return (
    <div>
      {!togggle ? (
        <Register setTogggle={setTogggle} />
      ) : (
        <Login setTogggle={setTogggle} />
      )}
    </div>
  );
};

export default App;



// function App(){
//   return(
//     <div>
//       <h1 class="bg-sky-800">fghjkl</h1>
//     </div>
//   )
// }

// export default App;