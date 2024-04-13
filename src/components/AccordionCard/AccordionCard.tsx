import { Badge } from "@/components/ui/badge";
import { FiExternalLink } from "react-icons/fi";
import AccordionCardImage from "../AccordionCardImage/AccordionCardImage";

interface AccordionCardProps {
  project: {
    name: string;
    description: string;
    url?: string;
    image: string;
    stack: string[];
    repo?: string;
    type: string;
    hash: string;
  };
}

const AccordionCard = ({ project }: AccordionCardProps): React.ReactElement => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4 px-2">
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="md:row-end-1 hover:opacity-80 h-fit my-auto transition-all border border-transparent hover:border-foreground relative cursor-none"
          data-interactive
        >
          <div className="absolute inset-0 w-full h-full bg-black/15 hover:bg-black/50 md:bg-black/50 opacity-50 md:opacity-0 hover:opacity-100  flex flex-col gap-0 items-center justify-center transition-all">
            <FiExternalLink className="text-foreground text-xl" />
            <p className="text-foreground text-xl">Visit</p>
          </div>
          <AccordionCardImage
            img={project.image}
            name={project.name}
            hashUrl={project.hash}
            hasUrl="true"
          />
        </a>
      ) : (
        <AccordionCardImage
          img={project.image}
          name={project.name}
          hashUrl={project.hash}
          hasUrl="false"
        />
      )}
      <div className="flex flex-col gap-2 md:row-end-1">
        <p className="h-full">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, i) => (
            <Badge
              key={i}
              variant="accent"
              className="cursor-none rounded text-xs px-3 font-thin"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      {project.repo ? (
        <div className="md:row-start-1 md:row-end-2 w-fit" data-interactive>
          <Badge
            className="rounded text-xs p-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground text-foreground px-3 py-1"
            variant="accent"
          >
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center w-full py-1 px-2 cursor-none"
            >
              GitHub Repo
              <FiExternalLink />
            </a>
          </Badge>
        </div>
      ) : null}
    </div>
  );
};

export default AccordionCard;
