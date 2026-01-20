import { Youtube, Instagram, Send } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Send, href: "#", label: "Telegram" },
  ];

  return (
    <div className="flex items-center justify-center gap-6">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-3 rounded-full border-2 border-primary bg-secondary
                     transition-all duration-300 hover:scale-110 hover:bg-primary/20
                     hover:shadow-[0_0_20px_hsl(300_100%_65%_/_0.6)]"
        >
          <Icon className="w-6 h-6 text-primary" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
