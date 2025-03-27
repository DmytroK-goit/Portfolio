import { Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import SharedLayout from "./Components/SharedLayout";
import NotFound from "./Components/NotFound/NotFound";
import { Hero } from "./Components/Hero/Hero";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Hero />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
