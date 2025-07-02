import { useState } from "react";
import { ArrowBigRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import ProjectDetails from "./ProjectDetails";

interface Tag {
  id: number;
  name: string;
  path: string;
}

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    subDescription?: string;
    href?: string;
    image: string;
    tags: Tag[];
  };
  setPreview: (image: string | null) => void;
}

const Project = ({ project, setPreview }: ProjectProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const { title, description, subDescription, href, image, tags } = project;

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-10 sm:flex sm:space-y-0 prata-regular"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="space-y-4">
          <p className="text-xl">{title}</p>
          <div className="hidden md:flex gap-5 mt-2 text-sand">
            {tags?.map((tag) => (
              <span key={tag.id} className="text-sm">
                {tag.name}
              </span>
            ))}
          </div>
          <TooltipProvider>
            <div className="flex gap-5 mt-2 flex-wrap">
              {tags?.map((tag) => (
                <Tooltip key={tag.id}>
                  <TooltipTrigger asChild>
                    <img
                      className="w-10 h-10 bg-gray-400 rounded-full p-1 cursor-pointer"
                      src={tag.path}
                      alt={tag.name}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <span>{tag.name}</span>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <ArrowBigRight className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          //@ts-expect-error No Error
          subDescription={subDescription}
          image={image}
          tags={tags}
          //@ts-expect-error No Erro
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
