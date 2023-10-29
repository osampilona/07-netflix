import PlanCard from "../components/PlanCard";

function PlansPage() {
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="w-[600px]">
        <h1 className="font-semibold text-3xl">
          Choose a plan that works for you
        </h1>
        <div className="flex mt-4">
          <PlanCard />
          <PlanCard />
        </div>
        <button className="bg-red-400 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700">
          Purchase
        </button>
      </div>
    </div>
  );
}

export default PlansPage;
