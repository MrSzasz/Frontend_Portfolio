import { LuBriefcase, LuUser } from "react-icons/lu";
import AccordionCard from "../AccordionCard/AccordionCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import type { Project } from "@/types/types";

interface JobsAccordionProps {
  projects: Project[];
}

const JobsAccordion = ({
  projects,
}: JobsAccordionProps): React.ReactElement => {
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
