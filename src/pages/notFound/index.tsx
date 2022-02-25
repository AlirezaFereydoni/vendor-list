// Style
import "./style.scss";

// Layout
import MainPageLayout from "../../layouts/mainPage";

const NotFound = () => {
  return (
    <MainPageLayout>
      <div className="not-found">
        <h1 className="not-found-message">Not Found</h1>
      </div>
    </MainPageLayout>
  );
};

export default NotFound;
