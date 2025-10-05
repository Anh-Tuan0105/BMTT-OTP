import { RouterProvider } from "react-router-dom";
import router from "./routes";
import './App.css'

function App() {

  return (<div className="bg-slate-100 h-screen">
    <div className="flex justify-center items-centerbh-screen">
      <RouterProvider router={router}/>
    </div>
  </div>
   
  );
}

export default App
