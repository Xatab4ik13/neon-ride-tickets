import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

interface InfoModalProps {
  title: string;
  children: React.ReactNode;
}

const InfoModal = ({ title, children }: InfoModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button 
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/50 
                     bg-secondary/50 text-primary text-sm transition-all duration-300
                     hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(300_100%_65%_/_0.3)]"
        >
          <Info className="w-4 h-4" />
          {title}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-card border-primary neon-border max-w-sm">
        <DialogHeader>
          <DialogTitle className="neon-text text-xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="text-muted-foreground text-sm leading-relaxed">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
