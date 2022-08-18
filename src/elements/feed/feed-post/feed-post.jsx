import { Avatar } from "@mui/material";
import { InputOption } from "../input-options";
import "./feed-post.css";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";

export const FeedPost = ({ name, description, message, photoUrl }) => {
  return (
    <div className="feedPost">
      <div className="post__header">
        <Avatar />
        <div className="post__userInfo">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__footer">
        <InputOption title="Like" icon={ThumbUpOutlinedIcon} color="gray" />
        <InputOption title="Comment" icon={CommentOutlinedIcon} color="gray" />
        <InputOption title="Share" icon={IosShareOutlinedIcon} color="gray" />
        <InputOption title="Send" icon={SendOutlinedIcon} color="gray" />
      </div>
    </div>
  );
};
