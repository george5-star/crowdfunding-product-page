const ProjectStatistics = () => {
  return (
    <div className="container mx-auto -mt-12 bg-neutral-white p-10 rounded-lg max-w-3xl">
      <div className="flex justify-start space-x-12">
        <div className="border-e-2 border-neutral-off-white pe-12">
          <h2 className="text-3xl font-bold">$89,914</h2>
          <p className="text-neutral-dark-gray mt-2">of $100,000 backed</p>
        </div>
        <div className="border-e-2 border-neutral-off-white pe-12">
          <h2 className="text-3xl font-bold">5,007</h2>
          <p className="text-neutral-dark-gray mt-2">total backers</p>
        </div>
        <div className="border-e-2 border-neutral-off-white pe-12">
          <h2 className="text-3xl font-bold">56</h2>
          <p className="text-neutral-dark-gray mt-2">days left</p>
        </div>
      </div>

      <div className="w-full mt-10 bg-neutral-off-white rounded-full h-2.5">
        <div
          className="bg-primary-moderate-cyan h-2.5 rounded-full"
          style={{ width: "65%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectStatistics;
