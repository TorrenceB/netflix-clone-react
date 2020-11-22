import React from "react";
import "./App.css";
import Main from "./Main";
import SelectViewer from "./Components/SelectViewer";
import { BrowserRouter } from "react-router-dom";

function App() {
  // const [view, setView] = useState();

  // useEffect(() => {
  //   // onclick avatar view = main
    
  // }, []);

  const handleClick = () => {
    return(
      <Main></Main>
    )
  };

  return (
    <BrowserRouter>
      <div className="app">
        <SelectViewer viewHandler={handleClick}></SelectViewer>
        {/* <Main></Main> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
