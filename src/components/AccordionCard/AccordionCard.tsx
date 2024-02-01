import { Badge } from "@/components/ui/badge";
import { FiExternalLink } from "react-icons/fi";

interface AccordionCardProps {
  src: string;
  name: string;
  url?: string;
  description: string;
  stack: string[];
  repo?: string;
}

const AccordionCard = ({
  src,
  name,
  url,
  description,
  stack,
  repo,
}: AccordionCardProps) => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 px-2">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="row-end-1 hover:opacity-80 transition-all border border-transparent hover:border-white relative cursor-none"
          data-interactive
        >
          <div className="absolute inset-0 w-full h-full bg-black/50 opacity-0 hover:opacity-100  flex flex-col gap-0 items-center justify-center transition-all">
            <FiExternalLink className="text-white text-xl" />
            <p className="text-white text-xl">Visit</p>
          </div>
          <img
            src={src}
            alt={`${name} preview with link`}
            className="aspect-video object-center object-cover"
          />
        </a>
      ) : (
        <img
          src={src}
          alt={`${name} preview with link`}
          className="aspect-video object-center object-cover row-end-1"
        />
      )}
      <div className="flex flex-col gap-2 row-end-1">
        <p className="h-full">{description}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="cursor-default rounded text-xs px-3 font-thin"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      {repo ? (
        <div className="row-start-1 row-end-2 w-fit" data-interactive>
          <Badge
            className="rounded text-xs p-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground text-white px-3 py-1"
            variant="default"
          >
            <a
              href={repo}
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
