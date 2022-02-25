// Style
import "./style.scss";

// Link
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-page">
      <h1 className="main-page-title">Welcome To our Website</h1>
      <Link to="/vendor" className="main-page-link">
        Go to Vendors Page
      </Link>
    </div>
  );
};

export default Main;
