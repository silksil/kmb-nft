import PropTypes from "prop-types";
import MainNavbar from "./MainNavbar";

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default function MainLayout({ children }) {
  return (
    <div style={{ backgroundImage: "url(/static/illustrations/stars.svg)", backgroundSize: "auto", width: "100%" }}>
      <MainNavbar />
      <div>{children}</div>
    </div>
  );
}
