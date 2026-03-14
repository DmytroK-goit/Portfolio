import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

const SharedLayout = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const isUpwork = params.get("upwork") === "true";

  return (
    <div>
      <Header isUpwork={isUpwork} />
      <Outlet context={{ isUpwork }} />
      <Footer isUpwork={isUpwork} />
    </div>
  );
};

export default SharedLayout;
