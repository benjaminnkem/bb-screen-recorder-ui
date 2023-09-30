import { motion } from "framer-motion";
import { useEffect } from "react";
import toast from "react-hot-toast";
import bgImage from "./assets/images/bg.jpg";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childrenVariant = {
  hidden: { x: "5%", opacity: 0 },
  show: { x: 0, opacity: 1 },
};

function App() {
  // const [status, setStatus] = useState({ loading: false, error: false });

  useEffect(() => {
    toast.success("Welcome", { id: "welcome" });
  }, []);

  // const getVideos = async () => {};

  return (
    <>
      <header className="min-h-screen flex items-center justify-center relative text-shadow" id="header">
        <img src={bgImage} alt="Image" className="w-full h-full object-cover absolute top-0 left-0" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="md:max-w-[1288px] mx-auto w-11/12">
            <div className="md:grid grid-cols-2 flex flex-col md:gap-10 gap-5 items-center justify-between">
              <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="show"
                className="space-y-6 text-center md:text-start py-10 md:py-0"
              >
                <motion.h1 variants={childrenVariant} className="text-4xl font-bold">
                  BB Screen Recorder
                </motion.h1>
                <motion.p variants={childrenVariant} className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus esse mollitia facilis eos ex
                  blanditiis laboriosam aut alias laborum error! Illo delectus minima quae exercitationem nemo ipsam
                  molestiae facilis nisi!
                </motion.p>

                <motion.button
                  variants={childrenVariant}
                  className="py-2 px-12 rounded-2xl bg-red-600 transition-colors hover:bg-red-700 text-white"
                >
                  Available Videos <i className="ri-video-line"></i>
                </motion.button>
              </motion.div>

              <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="show"
                className="items-center text-center justify-center flex-wrap p-16 hidden md:flex"
              >
                <div className="flex items-center text-center justify-center gap-1 flex-wrap">
                  <i className="ri-record-circle-fill text-7xl -rotate-45"></i>
                  <i className="ri-record-circle-fill text-7xl -rotate-45"></i>
                  <i className="ri-video-line text-7xl -rotate-45"></i>
                  <i className="ri-record-circle-fill text-7xl -rotate-45"></i>
                  <i className="ri-record-circle-fill text-7xl -rotate-45"></i>
                  <i className="ri-record-circle-fill text-7xl -rotate-45"></i>
                  <i className="ri-video-line text-7xl -rotate-45"></i>
                  <i className="ri-record-circle-fill text-7xl -rotate-45"></i>
                  <i className="ri-video-line text-7xl -rotate-45"></i>
                  <i className="ri-video-line text-7xl -rotate-45"></i>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
