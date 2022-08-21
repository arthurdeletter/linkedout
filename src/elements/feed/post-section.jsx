import "./post-section.css";
import CreateIcon from "@mui/icons-material/Create";

import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventIcon from "@mui/icons-material/Event";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { InputOption } from "./input-options";
import { db } from "../../firebase";
import { useState } from "react";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/user-slice";

export const PostFeedMessage = ({ postMessage }) => {
  const user = useSelector(selectUser);
  const [value, setValue] = useState("");

  const postOnFeed = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
      name: user?.username,
      description: user?.email,
      message: value,
      photoUrl: user?.picture,
      timestamp: serverTimestamp(),
    });

    setValue("");
  };

  return (
    <div className="feed__inputContainer">
      <div className="feed__input">
        <CreateIcon />
        <form onSubmit={postOnFeed}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="What's on your mind"
          />
          <button type="submit">Post</button>
        </form>
      </div>

      <div className="feed__options">
        <InputOption title="Image" icon={PhotoIcon} color="#ff6b6b" />
        <InputOption title="Video" icon={YouTubeIcon} color="#feca57" />
        <InputOption title="Event" icon={EventIcon} color="#1dd1a1" />
        <InputOption
          title="Article"
          icon={CalendarViewDayIcon}
          color="#0abde3"
        />
      </div>
    </div>
  );
};
