import { Link, X } from "lucide-react";
import { motion } from "motion/react";

type Tag = {
  id: string | number;
  path: string;
  name: string;
};

type ProjectDetailsProps = {
  title: string;
  description: string;
  subDescription: string[];
  image: string;
  tags: Tag[];
  href: string;
  closeModal: () => void;
};

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}: ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-8 overflow-auto backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-4 right-4 bg-midnight hover:bg-gray-600"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-t-2xl sm:h-64"
        />

        {/* Content */}
        <div className="p-5 space-y-4">
          <h5 className="text-xl font-bold text-white">{title}</h5>
          <p className="text-neutral-400">{description}</p>
          {subDescription.map((subDesc, i) => (
            <p key={i} className="text-neutral-400 text-sm">
              {subDesc}
            </p>
          ))}

          <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3 flex-wrap">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="rounded-lg w-5 h-5 hover:scale-110 transition-transform"
                />
              ))}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center text-left font-medium hover-animation bg-white text-black px-4 py-2 rounded-xl transition-colors"
            >
              View Project <Link className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
