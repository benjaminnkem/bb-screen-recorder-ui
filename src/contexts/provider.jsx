import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

const Provider = ({ children }) => {
  const toastConfig = {
    position: "top-center",
    duration: 3000,
    style: {
      minWidth: "200px",
    },

    success: {
      icon: "👍",
    },

    error: {
      icon: "❌",
    },

    loading: {
      icon: "⏳",
      duration: Infinity,
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  };

  return (
    <AnimatePresence mode="wait">
      <Toaster toastOptions={toastConfig} />
      {children}
    </AnimatePresence>
  );
};

export default Provider;
