import { LuBriefcase, LuUser } from "react-icons/lu";
import AccordionCard from "../AccordionCard/AccordionCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface JobsAccordionProps {
  projects: [
    {
      name: string;
      description: string;
      url?: string;
      image: string;
      stack: string[];
      repo?: string;
      type: string;
      main?: boolean;
    }
  ];
}

const JobsAccordion = ({ projects }: JobsAccordionProps) => {
  return (
    <Accordion type="single" collapsible>
      {projects
        .filter((project) => project.main === true)
        .map((project, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger
              className="px-2 cursor-none text-base"
              data-interactive
            >
              <div className="flex items-center gap-2 ">
                {project.type === "personal" ? (
                  <LuUser className="opacity-50" />
                ) : (
                  <LuBriefcase className="opacity-50" />
                )}
                {project.name}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <AccordionCard project={project} />
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default JobsAccordion;
