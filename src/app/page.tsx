import { type FC } from "react";
import settings from "@/lib/settings.json";

const Home: FC = () => {
  console.log(settings);
  return (
    <div className="">
      <div className="text-lg font-bold">Home</div>
      <div>
        <span className="text-blue-500">Hello</span>
        <span className="text-red-500">World</span>
      </div>
    </div>
  );
};

export default Home;
