import React from "react";
import "./header.css";
import "./header-item.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Container, SearchInput } from "../../ui";

export const Header = () => {
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
                <img
                  src="https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/280404262_3846356648922941_2947449676252310593_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=waEzgFDpJeoAX_kklfj&_nc_ht=scontent-bru2-1.xx&oh=00_AT9_sUkdiblw-8pfMeI1SrUiZYji6CDPCVMDk8irrLJ34g&oe=630165EB"
                  alt="User profile"
                />
              }
              text="Me"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

const HeaderItem = ({ avatar, icon, text, to, notifications, className }) => {
  return (
    <div className={`headeritem ${className}`}>
      {notifications && (
        <span className="headeritem__notifications">{notifications}</span>
      )}
      {icon || avatar}
      <span className="headeritem__text">{text}</span>
    </div>
  );
};
