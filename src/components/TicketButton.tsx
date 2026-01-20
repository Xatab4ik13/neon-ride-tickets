import { Ticket } from "lucide-react";

interface TicketButtonProps {
  count: number;
  onClick?: () => void;
}

const TicketButton = ({ count, onClick }: TicketButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full aspect-square flex items-center justify-center rounded-lg bg-secondary border border-primary 
                 transition-all duration-300 hover:scale-105 active:scale-95
                 animate-neon-pulse hover:shadow-[0_0_20px_hsl(300_100%_65%_/_0.5)]"
    >
      <div className="flex flex-col items-center justify-center gap-0.5">
        <Ticket className="w-4 h-4 text-primary transition-transform group-hover:rotate-12" />
        <span className="text-xs font-bold neon-text">{count}</span>
      </div>
    </button>
  );
};

export default TicketButton;
