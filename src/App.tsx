import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UsersContainers} from "./containers/usersContainers.tsx";
import {Form} from "./components/form.tsx";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
          <Routes>
              <Route path={"/"} element={<Form/>} />s
              <Route path={"/users"} element={<UsersContainers/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
