import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/home/Header/Header";

function Page404() {
  const bounceAnimation = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring", // Use spring animation
        damping: 10,
        stiffness: 100,
      },
    },
    exit: { opacity: 0, y: 100 },
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <motion.div
          variants={bounceAnimation} // Use the bounceAnimation variant
          initial="initial"
          animate="animate"
          exit="exit"
          className="p-8 bg-white shadow-md rounded-lg"
        >
          <h1 className="text-2xl font-bold mt-4 mb-4">404 - Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to={"/"}
            className="mt-12  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </>
  );
}

export default Page404;
