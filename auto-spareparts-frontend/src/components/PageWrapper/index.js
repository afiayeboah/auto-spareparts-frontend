import { Outlet } from "react-router-dom"

import Styles from "./styles";



const PageWrapper = () => {
  return (
    <Styles className="main-content-wrapper">
      <div className="wrappers-wrapper-haha">
        <Outlet />
      </div>
    </Styles>
  );
}

export default PageWrapper;