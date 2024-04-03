import BrandLogo from "../assets/images/logo-mastercraft.svg";
import BookMarkIcon from "../assets/images/icon-bookmark.svg";

const ProjectOverview = () => {
  return (
    <div className="container mx-auto text-center bg-neutral-white p-20 rounded-lg max-w-3xl relative -top-20">
      <img
        src={BrandLogo}
        alt="Brand logo"
        className="absolute -top-7 left-[50%] translate-x-[-50%]"
      />
      <div>
        <h1 className="font-bold text-3xl">Mastercraft Bamboo Monitor Riser</h1>
        <p className="text-neutral-dark-gray mt-2">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex justify-between items-center mt-8">
          <button className="bg-primary-moderate-cyan text-neutral-white rounded-full px-6 py-3 hover:bg-primary-dark-cyan">
            Back this project
          </button>{" "}
          <button className="flex items-center bg-neutral-off-white rounded-full pe-6">
            {" "}
            <img
              src={BookMarkIcon}
              alt="bookmark icon"
              className="max-w-full size-12"
            />
            <span className="ms-4">Bookmark</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
