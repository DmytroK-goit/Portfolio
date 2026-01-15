import { Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import SharedLayout from "./Components/SharedLayout";
import NotFound from "./Components/NotFound/NotFound";
import { Main } from "./Components/Main/Main";
import "./i18n";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
