import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionCard from "../AccordionCard/AccordionCard";
import { projects } from "data";

const AccordionContainer = () => {
  return (
    <Accordion type="single" collapsible>
      {projects.map((project, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger
            className="px-2 cursor-none text-base"
            data-interactive
          >
            {project.name}
          </AccordionTrigger>
          <AccordionContent>
            <AccordionCard
              name={project.name}
              url={project.url}
              stack={project.stack}
              repo={project.repo}
              description={project.description}
              src={project.image}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionContainer;
