import PropTypes from "prop-types";
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      <div>{children}</div>
    </>
  );
}
