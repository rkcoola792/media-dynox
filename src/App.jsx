import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage/Homepage";
import Marketing from "./components/Marketing/Marketing";
import { useState } from "react";
// import Cursor from "./components/cursor/Cursor";
function App() {
  // const [cursorXaxis, setCursorXasix] = useState();
  // const [cursorYaxis, setCursorYasix] = useState();

  // useEffect(() => {
  //   document.addEventListener("mousemove", (e) => {
  //     setCursorXasix(e?.pageX);
  //     setCursorYasix(e?.pageY);
  //     console.log("cursor movement", cursorXaxis);
  //   });
  // }, []);

  const Layout = () => {
    return (
      <>
        {/* <Cursor></Cursor>   */}
        {/* <div
          className="cursor"
          style={{ left: cursorXaxis + "px", top: cursorYaxis + "px" }}
        ></div> */}

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
