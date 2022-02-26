// Style
import "./style.scss";

// Layout
import MainPageLayout from "../../layouts/mainPage";

const NotFound = () => {
  return (
    <MainPageLayout>
      <main className="not-found">
        <h1 className="not-found-message">Not Found</h1>
      </main>
    </MainPageLayout>
  );
};

export default NotFound;
