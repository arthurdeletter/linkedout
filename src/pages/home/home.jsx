import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Header, AppBody, Sidebar, Feed, Widgets } from "../../elements";
import { selectUser } from "../../features/user/user-slice";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate])

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
