import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import DashBoard from "./components/DashBoard"
import Analytics from "./components/Analytics"
import Reminders from "./components/Reminders"
import Settings from "./components/Settings"
import Login from "./components/Login"
function App() {
  

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>

          <Route path="/" element={<Body/>}>
              <Route path="/" element={<DashBoard/>}></Route>
              <Route path="/login" element={<Login/>}>  </Route> 
              <Route path="/analytics" element={<Analytics/>}></Route>
              <Route path="/reminders" element={<Reminders/>}></Route>
              <Route path="/settings" element={<Settings/>}></Route>
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
