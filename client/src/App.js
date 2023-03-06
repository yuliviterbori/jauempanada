import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import RegisterForm from './pages/Register';
import LoginForm from "./pages/Login";
import User from "./pages/User"
import ProtectedRoute from "./utils/ProtectedRoute";
import Productos from "./pages/Productos";
import Favoritos from "./pages/Favoritos";
import RepetirPedido from "./pages/Repetir";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route index element={<Home />} />
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="cart" element={<Cart />} />
            <Route path="user" element={<User />} />
            <Route path="products" element={<Productos />} />
            <Route path="favorites" element={<Favoritos />} />
            <Route path="reorder" element={<RepetirPedido />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
