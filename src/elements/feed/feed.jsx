import { useEffect, useState } from "react";
import { FeedPost } from "./feed-post/feed-post";
import { FeedPosts } from "./feed-posts";
import "./feed.css";
import { PostFeedMessage } from "./post-section";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [posts]);

  return (
    <div className="feed">
      <PostFeedMessage postMessage={() => setPosts} />
      <FeedPosts>
        {posts.length === 0 ? (
          <NoPosts />
        ) : (
          posts
            .sort((a, b) => b.data.timestamp - a.data.timestamp)
            .map((post, index) => <FeedPost key={index} {...post.data} />)
        )}
      </FeedPosts>
    </div>
  );
};

const NoPosts = () => {
  return (
    <div className="noPosts">
      <p>Loading posts...</p>
    </div>
  );
};
