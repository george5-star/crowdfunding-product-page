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
      className="border-2 p-5 lg:p-10 mb-5 rounded-lg border-neutral-off-white"
      style={count === 0 ? countZeroStyles : { opacity: "1" }}
    >
      <div className="flex flex-wrap justify-between">
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        <p
          className={
            count > 0
              ? "text-primary-dark-cyan font-bold"
              : "text-neutral-dark-gray font-bold"
          }
        >
          Pledge {price} or more
        </p>
      </div>
      <p className="my-8 leading-6 text-neutral-dark-gray">{description}</p>
      <div className="flex flex-wrap justify-between">
        <p className="flex items-center mb-4">
          <span className="text-3xl me-3 font-bold">{count}</span>{" "}
          <span className="text-neutral-dark-gray">left</span>
        </p>
        <button
          className={
            count > 0
              ? "text-neutral-white px-6 py-3 rounded-full bg-primary-moderate-cyan hover:bg-primary-dark-cyan"
              : "text-neutral-white px-6 py-3 rounded-full bg-neutral-dark-gray cursor-not-allowed"
          }
        >
          Select Reward{" "}
        </button>
      </div>
    </div>
  );
};

export default Pledge;
