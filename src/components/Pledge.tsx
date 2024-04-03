interface PledgeProps {
  title: string;
  price: string;
  description: string;
  count: number;
}

const countZeroStyles = {
  opacity: 0.5,
  color: "hsl(0, 0%, 48%)",
};

const Pledge = ({ title, price, description, count }: PledgeProps) => {
  return (
    <div
      className="border-2 p-10 mb-5 rounded-lg border-neutral-off-white"
      style={count === 0 ? countZeroStyles : { opacity: "1" }}
    >
      <div className="flex justify-between">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-primary-dark-cyan font-bold">
          Pledge {price} or more
        </p>
      </div>
      <p className="my-8 leading-6 text-neutral-dark-gray">{description}</p>
      <div className="flex justify-between">
        <p className="flex items-center">
          <span className="text-3xl me-3 font-bold">{count}</span>{" "}
          <span className="text-neutral-dark-gray">left</span>
        </p>
        <button
          style={
            count === 0
              ? { backgroundColor: "hsl(0, 0%, 48%)" }
              : { backgroundColor: "hsl(176, 50%, 47%)" }
          }
          className="text-neutral-white px-6 py-3 rounded-full bg-primary-moderate-cyan hover:bg-primary-dark-cyan"
        >
          Select Reward{" "}
        </button>
      </div>
    </div>
  );
};

export default Pledge;
