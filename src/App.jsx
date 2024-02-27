import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"
import UserProfile from "./pages/UserProfile"
import CurrentUserProfile from "./pages/CurrentUserProfile"

import Footer from "./components/Footer/Footer"
import TypeJob from "./pages/TypeJob"

function App() {
  return (
    <div>
      <Navbar />

      <div className="max-w-container border-x-2 mx-auto min-h-body p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute><CurrentUserProfile /></ProtectedRoute>} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/job/:to" element={<TypeJob />} />

        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
