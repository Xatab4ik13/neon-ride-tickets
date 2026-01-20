import { Youtube, Instagram, Send } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Send, href: "#", label: "Telegram" },
  ];

  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-2 rounded-full border border-primary bg-secondary
                     transition-all duration-300 hover:scale-110 hover:bg-primary/20
                     hover:shadow-[0_0_15px_hsl(300_100%_65%_/_0.5)]"
        >
          <Icon className="w-4 h-4 text-primary" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
