import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import about from "../../assets/about.png";

const About = () => {
  const intl = useIntl();

  const aboutContent = intl.formatMessage({ id: "about-text" });
  return (
    <div className="border border-neutral-900 pb-4">
      <h1 className="py-10 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl scale-75 opacity-50"
              src={about}
              alt="Kevin Savsani"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {aboutContent}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
