import React from "react";
import { Header, AppBody, Sidebar, Feed, Widgets } from "../elements";

export const Home = () => {
  return (
    <>
      <Header />

      <AppBody>
        <Sidebar />
        <Feed />
        <Widgets />
      </AppBody>
    </>

    // App Body start
    // Sidebar
    // Feed
    // Widgets
    // App body end
  );
};
