import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function About() {
  const LinkAvt = "/avt.JPG";

  const icons = [
    { src: "/Coffee.png", text: "Caffeine in, code out", color: "#B58827" },
    { src: "/Heart.png", text: "Try learn new knowledges", color: "#B52727" },
    { src: "/Hobby.png", text: "Health and effective", color: "#CD813D" },
  ];

  const aboutTexts = [
    "I’m an AI Engineering student focused on building practical machine learning solutions, from NLP to data-driven systems.",
    "With experience as a student at the SaiGon University School, I've developed systems and machine learning implementations."
  ];

  return (
    <section className="
      max-w-6xl mx-auto
      px-4
      py-20
      flex flex-col
      md:flex-row
      gap-12
      items-center
    ">
      {/* Avatar */}  
      <div className="shrink-0">
        <Avatar className="
          w-40 h-40
          sm:w-48 sm:h-48
          md:w-56 md:h-56
        ">
          <AvatarImage className="object-cover" src={LinkAvt} />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 text-center md:text-left">
        <h2 className="text-3xl text-foreground sm:text-4xl font-bold">
          About Me
        </h2>

        <div className="flex flex-col gap-4 text-muted-foreground text-base sm:text-lg max-w-xl">
          {aboutTexts.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>

        {/* Icons */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-4">
          {icons.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={item.src} />
              </Avatar>
              <span
                className="text-xs sm:text-sm font-medium"
                style={{ color: item.color }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
