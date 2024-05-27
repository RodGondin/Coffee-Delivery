import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/index.tsx";
import { Home } from "./pages/Home/index.tsx";
import { Cart } from "./pages/Cart/index.tsx";
import { Success } from "./pages/Success/index.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<Success />} />
      </Route>
    </Routes>
  );
} 