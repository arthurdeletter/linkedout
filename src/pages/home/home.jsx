import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, AppBody, Sidebar, Feed, Widgets } from "../../elements";
import { selectUser, signin, signout } from "../../features/user/user-slice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export const Home = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (userCreds) => {
      if (userCreds) {
        dispatch(
          signin({
            uid: userCreds.uid,
            username: userCreds.displayName,
            email: userCreds.email,
            picture: userCreds.photoURL,
          })
        );
      } else {
        dispatch(signout());
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

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
