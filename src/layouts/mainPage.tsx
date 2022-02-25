import { ReactNode } from "react";

// Style
import "./style.scss";

interface iMainLayout {
  children: ReactNode;
}

const MainPageLayout = ({ children }: iMainLayout) => {
  return <div className="main-layout">{children}</div>;
};

export default MainPageLayout;
