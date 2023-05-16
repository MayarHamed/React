import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home"
import StudentDetails from "./Components/StudentDetails"
import Profile from "./Components/Profile"
import Error from "./Components/Error"

function App() {

  return (
    <div>
      <div className="allComp">
        <BrowserRouter>
          <div className="header">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<StudentDetails />} />
            <Route path="/users/profile" element={<Profile />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;