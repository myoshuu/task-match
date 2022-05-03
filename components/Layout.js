import Meta from "./Meta";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div>
        <main className="min-h-screen">{children}</main>
      </div>
    </>
  );
};

export default Layout;
