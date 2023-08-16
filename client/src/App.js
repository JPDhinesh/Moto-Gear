import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";
import Error from "./components/Error/Error";
import HomePage from "./components/Main/Home/HomePage";
import Helmet, {
  loader as loaderHelmet,
} from "./components/Products/Helmet/Helmet";
import Jacket, {
  loader as loaderJacket,
} from "./components/Products/Jacket/Jacket";
import Pant, { loader as loaderPant } from "./components/Products/Pant/Pant";
import About, { loader as loaderAbout } from "./components/About/About";
import DetailPage, {
  loader as loaderDetailPage,
} from "./components/Products/DetailPage/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/helmet",
        element: <Helmet />,
        loader: loaderHelmet,
      },
      {
        path: "/helmet/:id",
        id: "product-detail",
        element: <DetailPage />,
        loader: loaderDetailPage,
      },
      {
        path: "/jacket",
        element: <Jacket />,
        loader: loaderJacket,
      },
      {
        path: "/pant",
        element: <Pant />,
        loader: loaderPant,
      },
      {
        path: "/about",
        element: <About />,
        loader: loaderAbout,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
