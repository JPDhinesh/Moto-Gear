import React from "react";
import { useRouteError } from "react-router-dom";
import { Header } from "../Main/Header/Header";
import { MainNavigation } from "../Main/Navigation/MainNavigation";
import PageContent from "./PageContent";

export default function Error() {
  const error = useRouteError();

  let title = "An Error Occured";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found";
    message = "Could not found the page";
  }

  return (
    <>
      <Header />
      <MainNavigation />
      <PageContent title={title}>{message}</PageContent>
    </>
  );
}
