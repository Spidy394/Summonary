import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <div className="">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant={"secondary"}
            className="relative px-6 py-2 text-base font-medium text-foreground rounded-full transition-colors duration-200"
          >
            <Sparkles className="!size-6 mr-2 text-rose-600 animate-pulse" />
            <p className="text-base">Powered by AI</p>
          </Badge>
        </div>
      </div>
      <h1 className="font-bold py-6 text-center ">
        Transform PDFs into
        <span className="relative inline-block">
          <span className="relative z-10 px-2">concise</span>
          <span className="absolute inset-0 bg-primary/40 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden='true'></span>
        </span>
        summaries
      </h1>
      <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-foreground/60">
        Get a beautiful summary reel of the document in seconds.
      </h2>
      <div>
        <Button variant={"link"} className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-500 hover:to-slate-900 hover:from-rose-500 hover:no-underline font-bold shadow-lg transition-all duration-300">
          <Link href="#pricing" className="flex gap-2 items-center">
            <span>Try Summonary</span>
            <ArrowRight className="animate-pulse"/>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
