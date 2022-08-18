import { Avatar } from "@mui/material";
import "./sidebar.css";

export const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1874&q=80"
          alt="User banner"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Arthur De Letter</h2>
        <h4>@arthurdeletter</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profile views</p>
          <p className="sidebar__statNumber">2,548</p>
        </div>

        <div className="sidebar__stat">
          <p>Engagement</p>
          <p className="sidebar__statNumber">2,548</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("developer")}
        {recentItem("webdevelopment")}
        {recentItem("programmingmemes")}
        {recentItem("programming")}
      </div>
    </aside>
  );
};
