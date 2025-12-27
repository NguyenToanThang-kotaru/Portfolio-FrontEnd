import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function About() {
  const LinkAvt = "/avt.JPG";
  const icons = [
    {
      src: "/Coffee.png",
      text: "Caffeine in, code out",
      color: "#B58827",
      width: "5em",
    },
    {
      src: "/Heart.png",
      text: "Try learn new knowledges",
      color: "#B52727",
      width: "6em",
    },
    {
      src: "/Hobby.png",
      text: "Health and effective",
      color: "#CD813D",
      width: "5em",
    },
  ];
  const aboutTexts = [
    "I’m an AI Engineering student focused on building practical machine learning solutions, from NLP to data-driven systems. I enjoy turning complex ideas into real-world applications.",
    "With experience as a student at the SaiGon University School, I've developed a website and system, visualization, and machine learning implementation. I'm passionate about making AI accessible and impactful.",
  ];

  return (
    <div className="flex  items-center">
      <div className="flex items-center justify-center">
        {/* Left */}
        <div className="flex justify-center">
          <Avatar className="mr-[4em] h-[14em] w-[14em]">
            <AvatarImage
              className="object-cover"
              alt="Nguyen Toan Thang portrait"
              src={LinkAvt}
            />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
        </div>

        {/* Right */}
        {/* <div className="0"> */}

        {/* </div> */}
      </div>
      <div >
        <h2 className="text-foreground font-bold text-5xl">About Me</h2>
        <div className="flex gap-[5em] items-center mt-[4em] justify-center">
          <div className="text-foreground text-xl flex flex-col gap-[2em] w-[20em]">
            {aboutTexts.map((text, idx) => (
              <div key={idx}>{text}</div>
            ))}
          </div>
        </div>
        <div className="mt-[2em] flex gap-10">
          {icons.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1 justify-center">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src={item.src}
                  alt={item.text}
                />
              </Avatar>
              <p
                className="text-xs"
                style={{ color: item.color, width: item.width }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
