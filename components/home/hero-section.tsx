import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const HeroSection = () => {
  return (
    <section>
        <div className="">
            <div className="flex">
                <Badge>
                <Sparkles className="size-6 mr-2 text-primary animate-pulse"/>
                <p>Powered by AI</p>
                </Badge>
            </div>
            <h1>Transform PDFs into <span>concise</span> summaries</h1>
            <h2>Get a beautiful summary reel of the document in seconds.</h2>
            <Button>Try Summonary</Button>
        </div>
    </section>
  )
}

export default HeroSection