import { Ticket } from "lucide-react";

interface TicketButtonProps {
  count: number;
  onClick?: () => void;
}

const TicketButton = ({ count, onClick }: TicketButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full py-3 px-3 rounded-xl bg-secondary border-2 border-primary 
                 transition-all duration-300 hover:scale-105 active:scale-95
                 animate-neon-pulse hover:shadow-[0_0_30px_hsl(300_100%_65%_/_0.6)]"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
            <Ticket 
              key={i} 
              className="w-4 h-4 text-primary transition-transform group-hover:rotate-12" 
            />
          ))}
          {count > 3 && <span className="text-primary text-xs ml-1">+{count - 3}</span>}
        </div>
        <span className="text-sm font-bold neon-text">
          {count} {count === 1 ? 'билет' : count < 5 ? 'билета' : 'билетов'}
        </span>
      </div>
    </button>
  );
};

export default TicketButton;
