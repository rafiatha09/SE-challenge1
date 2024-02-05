import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import AddPostForm from "./pages/AddPostForm";
import EditPostForm from "./pages/EditPostForm";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:postId",
        element: <Blog />,
      },
      {
        path: "/add-post",
        element: <AddPostForm />,
      },
      {
        path: "/edit-post/:postId",
        element: <EditPostForm />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <div className="w-full h-full">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
