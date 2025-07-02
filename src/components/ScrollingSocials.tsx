import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { socials } from "../constatnts/data";
const ScrollingSocials = () => {
  return (
    <div className="overflow-hidden w-1/2 mx-auto mt-20">
      <TooltipProvider>
        <div className="flex items-center justify-center animate-scroll gap-10 text-white text-xl">
          {[...socials, ...socials].map((social, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-royal transition-colors duration-300"
                >
                  {social.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-sm">
                {social.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default ScrollingSocials;
