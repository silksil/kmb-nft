import PropTypes from "prop-types";
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default function MainLayout({ children }) {
  return (
    <div style={{ backgroundImage: "url(/static/illustrations/stars.svg) no-repeat", backgroundSize: "cover", width: "100%" }}>
      <MainNavbar />
      <div>{children}</div>
      <MainFooter />
    </div>
  );
}
