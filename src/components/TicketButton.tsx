import { Ticket } from "lucide-react";

interface TicketButtonProps {
  count: number;
  onClick?: () => void;
}

const TicketButton = ({ count, onClick }: TicketButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full py-2.5 px-2 rounded-lg bg-secondary border border-primary 
                 transition-all duration-300 hover:scale-105 active:scale-95
                 animate-neon-pulse hover:shadow-[0_0_20px_hsl(300_100%_65%_/_0.5)]"
    >
      <div className="flex flex-col items-center justify-center gap-0.5">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
            <Ticket 
              key={i} 
              className="w-3.5 h-3.5 text-primary transition-transform group-hover:rotate-12" 
            />
          ))}
          {count > 3 && <span className="text-primary text-[10px] ml-0.5">+{count - 3}</span>}
        </div>
        <span className="text-xs font-bold neon-text">
          {count} {count === 1 ? 'билет' : count < 5 ? 'билета' : 'билетов'}
        </span>
      </div>
    </button>
  );
};

export default TicketButton;
