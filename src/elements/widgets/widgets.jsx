import { Avatar } from "@mui/material";
import "./widgets.css";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const Widgets = () => {
  return (
    <div className="widgets">
      <h3>Add to your feed</h3>

      <div className="widget__conainer">
        <AccountOption name="Github" type="Company" topic="Software" />
        <AccountOption
          name="TUURBODESIGNS"
          type="Company"
          topic="Web Development"
        />
        <AccountOption name="Onteractive" type="Social" topic="Web Design" />
      </div>
    </div>
  );
};

const AccountOption = ({ name, type, topic, imgUrl }) => {
  return (
    <div className="accountOption">
      <Avatar />
      <div className="account__info">
        <h4>{name}</h4>
        <p>
          {type} • {topic}
        </p>
        <button className="account__followBtn">
          <AddOutlinedIcon />
          <span>Follow</span>
        </button>
      </div>
    </div>
  );
};
