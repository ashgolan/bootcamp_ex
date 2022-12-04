import Box from "./Box";
import { useState } from "react";
function App() {
  const [showBox, setShowBox] = useState(true);
  return (
    <div>
      {showBox && <Box width="500px" setShowBox={setShowBox}></Box>}
      {showBox && <Box width="200px" setShowBox={setShowBox}></Box>}
      {showBox && <Box width="50px" setShowBox={setShowBox}></Box>}
    </div>
  );
}
export default App;
