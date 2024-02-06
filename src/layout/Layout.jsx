import Sidebar from '../components/Sidebar.jsx';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7">
        {children}
      </div>
    </div>
  );
};

export default Layout;
