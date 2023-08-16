import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Main/Header/Header";
import { MainNavigation } from "./Main/Navigation/MainNavigation";
import Footer from "./Main/Footer/Footer";

export const RootLayout = () => {
  return (
    <Fragment>
      <Header />
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </Fragment>
  );
};
