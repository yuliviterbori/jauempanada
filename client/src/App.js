import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import RegisterForm from './pages/Register';
import LoginForm from "./pages/Login";
import User from "./pages/User"
import ProtectedRoute from "./utils/ProtectedRoute";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="user" element={<User />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
