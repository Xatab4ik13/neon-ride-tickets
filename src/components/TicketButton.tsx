import { Ticket } from "lucide-react";

interface TicketButtonProps {
  count: number;
  onClick?: () => void;
}

const TicketButton = ({ count, onClick }: TicketButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full py-5 px-4 rounded-lg 
                 bg-gradient-to-b from-secondary to-background
                 border border-primary/40
                 transition-all duration-300 
                 hover:border-primary/80 hover:bg-gradient-to-b hover:from-secondary/80 hover:to-background
                 active:scale-[0.98]"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
            <Ticket 
              key={i} 
              className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" 
            />
          ))}
          {count > 3 && <span className="text-primary/70 text-xs ml-0.5">+{count - 3}</span>}
        </div>
        <span className="text-sm font-medium text-primary/90 group-hover:text-primary transition-colors">
          {count} {count === 1 ? 'билет' : count < 5 ? 'билета' : 'билетов'}
        </span>
      </div>
    </button>
  );
};

export default TicketButton;
