import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import Layout from "./src/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DemoRouter2 from "./src/components/pages/DemoRouter2";
import DemoRouter1 from "./src/components/pages/DemoRouter1";
import { TodoPresenter } from "./src/components/pages/TodoPresenter/TodoPresenter";
import { TodoContainer } from "./src/components/pages/TodoPresenter/feature";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

// const container = document.getElementById("app");
// const root = createRoot(container!);
// root.render(<Layout id="" />);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout id="" />,
  },
  {
    path: "/demo1",
    element: <DemoRouter1 />,
  },
  {
    path: "/demo2",
    element: <DemoRouter2 />,
  },
  {
    path: "todo",
    element: <TodoContainer />,
  },
]);

const container = document.getElementById("app");

ReactDOM.createRoot(container!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
