import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UsersContainers} from "./containers/usersContainers.tsx";
import {Form} from "./components/form.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={"https://b1adedev.github.io/AdminPanel/"} element={<Form/>} />s
              <Route path={"https://b1adedev.github.io/AdminPanel/users"} element={<UsersContainers/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
