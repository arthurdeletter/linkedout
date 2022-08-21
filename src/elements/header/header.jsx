import React from "react";
import "./header.css";
import "./header-item.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Container, SearchInput } from "../../ui";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signout } from "../../features/user/user-slice";
import { Avatar } from "@mui/material";

export const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <div className="header__left">
            <img
              src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
              alt="LinkedOut Logo"
            />
            <SearchInput
              placeholder="Search"
              icon={<SearchIcon />}
              name="header-search"
            />
          </div>

          <div className="header__right">
            <HeaderItem icon={<HomeIcon />} text="Home" className="active" />
            <HeaderItem icon={<SupervisorAccountIcon />} text="My network" />
            <HeaderItem icon={<BusinessCenterIcon />} text="Jobs" />
            <HeaderItem icon={<MessageIcon />} text="Messages" />
            <HeaderItem icon={<NotificationsIcon />} text="Notifications" />
            <HeaderItem
              avatar={
                <Avatar className="headerItem__avatar" src={user?.picture}>
                  {user?.username[0].toUpperCase()}
                </Avatar>
              }
              text="Me"
            />
            <HeaderItem
              icon={<LogoutOutlinedIcon />}
              text="Log out"
              onClick={() => dispatch(signout())}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

const HeaderItem = ({
  avatar,
  icon,
  text,
  to,
  notifications,
  className,
  onClick,
}) => {
  return (
    <div className={`headeritem ${className ?? ""}`} onClick={onClick}>
      {notifications && (
        <span className="headeritem__notifications">{notifications}</span>
      )}
      {icon || avatar}
      <span className="headeritem__text">{text}</span>
    </div>
  );
};
