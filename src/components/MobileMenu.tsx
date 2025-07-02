import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 min-h-screen"
            onClick={onClose}
          />

          {/* Sidebar Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 top-0 right-0 w-1/2 min-h-screen z-50 flex flex-col p-6 gap-4 md:hidden bg-black dark:bg-white text-white dark:text-black overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <button onClick={onClose}>
                <X className="h-6 w-6 cursor-pointer" />
              </button>
            </div>

            <div className="flex flex-col items-center space-y-4 uppercase prata-regular transition-colors">
              <a
                href="/"
                className=" transition-colors text-gray-800 hover:text-black"
              >
                Home
              </a>
              <a
                href="#about"
                className=" transition-colors text-gray-800 hover:text-black"
              >
                About
              </a>
              <a
                href="#contact"
                className=" transition-colors text-gray-800 hover:text-black"
              >
                contact
              </a>
            </div>

            <div className="mt-4 flex flex-col gap-2"></div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
