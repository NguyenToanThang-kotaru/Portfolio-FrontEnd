import { div, sub } from "motion/react-client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
export function SuperTitle(){
    const words = "Hello, I’m Koarut this is My Portfolio..."
    const subWords = "Exploring software and Machine Learning"
    return(
        <div className="h-screen pt-[7em]">
            <TextGenerateEffect words = {words} className="pointer-events-none "/>
            <p className="text-muted-foreground text-xl text-center font-bold mt-[1em]">{subWords}</p>
        </div>
    )

}