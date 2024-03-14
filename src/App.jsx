import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage/Homepage";
import Marketing from "./components/Marketing/Marketing";
// import Cursor from "./components/cursor/Cursor";
function App() {
  const Layout = () => {
    return (
      <>
        {/* <Cursor></Cursor>   */}
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Homepage></Homepage> },
        { path: "/marketing", element: <Marketing></Marketing> },
      ],
    },
  ]);

  return (
    <div className="App ">
      {/* <Cursor></Cursor> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
