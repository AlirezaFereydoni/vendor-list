// Style
import "./style.scss";

// Layout
import MainPageLayout from "../../layouts/mainPage";

// Link
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <MainPageLayout>
      <div className="main-page">
        <h1 className="main-page-title">Welcome To our Website</h1>
        <Link to="/vendor" className="main-page-link">
          Go to Vendors Page
        </Link>
      </div>
    </MainPageLayout>
  );
};

export default Main;
