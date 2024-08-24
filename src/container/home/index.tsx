import { useIntl } from "react-intl";
import profile from "../../assets/profile.jpg";
const Home = () => {
  const intl = useIntl();

  const homeContent = intl.formatMessage({ id: "home-content" });
  return (
    <div className="border border-neutral-900 pb-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Kevin Savsani
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {homeContent}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-2xl scale-75 opacity-50" src={profile} alt="Kevin Savsani" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
