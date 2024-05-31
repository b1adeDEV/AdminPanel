import AppContainers from "./containers/AppContainers.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UsersContainers} from "./containers/usersContainers.tsx";
import {Hub} from "./components/hub.tsx";
import {LoginContainers} from "./containers/LoginContainers.tsx";
import {Form} from "./components/form.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Form/>} />s
              <Route path={"/users"} element={<UsersContainers/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
