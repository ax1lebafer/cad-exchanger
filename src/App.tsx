import "./App.css";
import Layout from "./components/Layout/Layout.tsx";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.tsx";
import { routes } from "./lib/routes.ts";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<MainPage />} path={routes.HOME} />
      </Route>
    </Routes>
  );
}

export default App;
