import { TextGenerateEffect } from "../ui/text-generate-effect";

export function SuperTitle() {
  const words = "Hello, I’m Nguyen Toan Thang this is My Portfolio...";
  const subWords = "Exploring software and Machine Learning";

  return (
    <section className="
      min-h-screen
      flex flex-col items-center justify-center
      px-4
      text-center
    ">
      <TextGenerateEffect
        words={words}
        className="
          pointer-events-none
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
        "
      />

      <p className="
        mt-4
        text-muted-foreground
        text-base
        sm:text-lg
        md:text-xl
        font-semibold
      ">
        {subWords}
      </p>
    </section>
  );
}
