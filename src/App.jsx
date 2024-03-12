import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Cursor from "./components/cursor/Cursor";
function App() {
  const Layout = () => {
    return (
      <>
     
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
      children: [{ path: "/", element: <Homepage></Homepage> }],
    },
  ]);

  return (
    <div className="App">
      {/* <Cursor></Cursor> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
