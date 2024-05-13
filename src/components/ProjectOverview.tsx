import BrandLogo from "../assets/images/logo-mastercraft.svg";
import BookMarkIcon from "../assets/images/icon-bookmark.svg";
import BookMarkedIcon from "../assets/images/icon-bookmarked.svg";
import { useState } from "react";

const ProjectOverview = () => {
  const [isBookmarked, setBookmarkStatus] = useState(false);

  const handleBookMark = () => {
    setBookmarkStatus((prevStatus) => !prevStatus);
  };

  return (
    <div className="container mx-auto text-center bg-neutral-white p-10 lg:p-20 rounded-lg max-w-3xl relative -top-20">
      <img
        src={BrandLogo}
        alt="Brand logo"
        className="absolute -top-7 left-[50%] translate-x-[-50%]"
      />
      <div>
        <h1 className="font-bold text-2xl lg:text-3xl">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="text-neutral-dark-gray mt-2">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex justify-between items-center mt-8 w-full">
          <button className="bg-primary-moderate-cyan text-neutral-white rounded-full px-4 lg:px-6 py-3.5 hover:bg-primary-dark-cyan">
            Back this project
          </button>
          <button
            onClick={handleBookMark}
            className="flex items-center bg-neutral-off-white rounded-full lg:pe-6"
          >
            <img
              src={isBookmarked ? BookMarkedIcon : BookMarkIcon}
              alt="bookmark icon"
              className="max-w-full lg:size-12"
            />
            <span
              className={
                isBookmarked
                  ? "hidden lg:flex ms-4 text-primary-moderate-cyan font-bold"
                  : "hidden lg:flex ms-4"
              }
            >
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
