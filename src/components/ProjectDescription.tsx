import Pledge from "./Pledge";
import data from "../../data.json";

const pledgeVariants = data.map((pledge) => {
  return (
    <Pledge
      key={pledge.id}
      title={pledge.pledgeTitle}
      price={pledge.price}
      description={pledge.description}
      count={pledge.pledgeCount}
    />
  );
});

const ProjectDescription = () => {
  return (
    <div className="container mx-auto p-10 bg-neutral-white rounded-lg max-w-3xl my-8 space-y-6">
      <h2 className="text-2xl font-bold">About this project</h2>
      <p className="text-neutral-dark-gray">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="text-neutral-dark-gray">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>

      <div>{pledgeVariants}</div>
    </div>
  );
};

export default ProjectDescription;
