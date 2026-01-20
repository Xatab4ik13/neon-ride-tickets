import logo from "@/assets/logo.png";
import TicketButton from "@/components/TicketButton";
import AnimatedMotorcycle from "@/components/AnimatedMotorcycle";
import SocialLinks from "@/components/SocialLinks";
import InfoModal from "@/components/InfoModal";

const Index = () => {
  const ticketOptions = [1, 3, 5, 10, 20];

  const handleTicketPurchase = (count: number) => {
    console.log(`Покупка ${count} билетов`);
    // Здесь будет логика покупки
  };

  return (
    <div className="h-[100dvh] bg-background flex flex-col relative overflow-hidden">
      {/* Header with Logo on the left */}
      <header className="flex items-center justify-between pt-2 pb-1 px-3">
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_8px_hsl(300_100%_65%/_0.15)]"
          />
          <div>
            <h1 className="text-sm font-bold neon-text animate-glow-text">
              РОЗЫГРЫШ МОТОЦИКЛА
            </h1>
            <p className="text-muted-foreground text-[10px]">
              Выбери количество билетов
            </p>
          </div>
        </div>
      </header>

      {/* Ticket Buttons - 3 on top, 2 centered below */}
      <main className="flex-1 px-3 pt-4 pb-2 relative z-10">
        <div className="grid grid-cols-3 gap-2 mb-2">
          {ticketOptions.slice(0, 3).map((count) => (
            <TicketButton 
              key={count} 
              count={count} 
              onClick={() => handleTicketPurchase(count)}
            />
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {ticketOptions.slice(3).map((count) => (
            <div key={count} className="w-1/3">
              <TicketButton 
                count={count} 
                onClick={() => handleTicketPurchase(count)}
              />
            </div>
          ))}
        </div>

        {/* Info Buttons */}
        <div className="flex justify-center gap-3 mt-3">
          <InfoModal title="Информация">
            <p className="mb-3">
              Добро пожаловать в розыгрыш мотоцикла! 🏍️
            </p>
            <p className="mb-3">
              Чем больше билетов вы приобретете, тем выше ваши шансы на победу.
            </p>
            <p>
              Победитель будет определен случайным образом среди всех участников.
            </p>
          </InfoModal>
          
          <InfoModal title="Оферта">
            <p className="mb-3">
              Участвуя в розыгрыше, вы соглашаетесь с условиями публичной оферты.
            </p>
            <p className="mb-3">
              Организатор оставляет за собой право изменять условия проведения розыгрыша.
            </p>
            <p>
              Подробные условия доступны по запросу.
            </p>
          </InfoModal>
        </div>
      </main>

      {/* Animated Motorcycle - Fixed bottom right */}
      <div className="fixed bottom-12 right-0 w-2/5 h-28 pointer-events-none z-0">
        <AnimatedMotorcycle />
      </div>

      {/* Footer with Social Links */}
      <footer className="py-2 px-3 border-t border-primary/20 relative z-10">
        <p className="text-center text-muted-foreground text-[10px] mb-1">
          Следите за нами
        </p>
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Index;
