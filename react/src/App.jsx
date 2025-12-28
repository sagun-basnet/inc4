// import { Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeLayout from "./layout/HomeLayout";
const App = () => {
  // const DashboardLayout = () => {
  //   return (
  //     <>
  //       <Topbar />
  //       <div className="flex">
  //         <Sidebar />
  //         <Outlet />
  //       </div>
  //     </>
  //   );
  // };

  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    // {
    //   path: "/dashboard",
    //   element: <DashboardLayout/>,
    //   children: [
    //     {
    //       path: "",
    //       element: <DashboardHome/>
    //     },
    //     {
    //       path: "/dashboard/user-management",
    //       element: <UserManagement/>
    //     }
    //   ]
    // },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> */}
    </>
  );
};

export default App;
