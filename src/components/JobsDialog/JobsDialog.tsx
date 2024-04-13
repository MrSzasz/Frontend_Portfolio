import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import AccordionCard from "../AccordionCard/AccordionCard";
import type { Project } from "@/types/types";

interface JobsDialogProps {
  projects: Project[];
}

const JobsDialog = ({ projects }: JobsDialogProps): React.ReactElement => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-none" data-interactive>
          See all
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-[85vw] md:max-w-[70vw] h-[90vh] md:h-[85vh] overflow-y-auto"
        data-lenis-prevent
      >
        <h2 className="text-5xl md:text-6xl">Work</h2>
        <div className="grid grid-cols-1  gap-4">
          {projects
            .filter((project) => project.type === "work")
            .map((project, i) => (
              <div key={i}>
                <AccordionCard project={project} />
                <Separator className="my-4" />
              </div>
            ))}
        </div>
        <h2 className="text-5xl md:text-6xl">Personal</h2>
        {projects
          .filter((project) => project.type === "personal")
          .map((project, i) => (
            <div key={i}>
              <AccordionCard project={project} />
              <Separator className="my-4" />
            </div>
          ))}
      </DialogContent>
    </Dialog>
  );
};

export default JobsDialog;
