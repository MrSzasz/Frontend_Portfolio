import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionCard from "../AccordionCard/AccordionCard";
import { projects } from "data";
import { LuBriefcase, LuUser } from "react-icons/lu";

const AccordionContainer = (): React.ReactElement => {
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
      <div className="flex justify-between my-2">
        <div className="flex md:gap-6 gap-4 pt-2 text-sm opacity-50">
          <div className="flex gap-2 items-center">
            <LuUser className="opacity-50" /> <small>Personal</small>
          </div>
          <div className="flex gap-2 items-center">
            <LuBriefcase className="opacity-50" /> <small>Work</small>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default AccordionContainer;
