import { Provider } from "react-redux"
import Body from "./components/Body"
import Login from "./components/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from "./utils/store"

function App() {
  return (
    <>
      <Provider store={store}>
      <BrowserRouter basename='/'>
        <Routes>
            <Route path="/" element={<Body/>}>
              <Route path="/login" element={<Login/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter> 
      </Provider>
    </>
  )
}

export default App
