"use client";

import { useEffect, useRef, useState } from "react";
import reels from "../Data/Data";

export default function Home() {
  const [likes, setLikes] = useState(reels.map(() => false));
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          const rect = video.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
          if (isVisible) {
            video.play();
          } else {
            video.pause();
            video.currentTime = 0;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-lg mx-auto py-4">
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className="mb-6 bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <video
              src={reel.videoSrc}
              className="w-full h-auto"
              muted
              loop
              ref={(el) => (videoRefs.current[index] = el)}
              controls
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{reel.product}</h2>
              <button
                className="mt-2 text-blue-500"
                onClick={() => toggleLike(index)}
              >
                {likes[index] ? "Unlike" : "Like"}
              </button>
              <button className="ml-4 mt-2 text-blue-500">Comment</button>
              <button className="ml-4 mt-2 text-blue-500">Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
