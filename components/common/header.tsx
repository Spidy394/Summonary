import { ThemeToggle } from "../theme-toggle";
import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./nav-link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className="w-full">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 lg:px-8 mx-auto">
        <div className="flex lg:flex-1">
          <NavLink
            href="/"
            className="flex items-center gap-1 lg:gap-2 shrink-0 hover:text-current"
          >
            <FileText className="size-5 lg:size-6 hover:rotate-12 transform transition duration-200 ease-in-out text-primary" />
            <span className="font-bold text-lg lg:text-xl">Summonary</span>
          </NavLink>
        </div>

        <div className="flex lg:justify-center gap-4 lg:gap-8 lg:items-center">
          <NavLink
            href="/#pricing"
            className="hover:text-primary transition-colors text-sm font-medium"
          >
            Pricing
          </NavLink>
          <SignedIn>
            <NavLink
              href="/dashboard"
              className="hover:text-primary transition-colors text-sm font-medium"
            >
              Your Summaries
            </NavLink>
          </SignedIn>
        </div>

        <div className="flex lg:justify-end lg:flex-1 items-center gap-3 lg:gap-4">
          <SignedIn>
            <div className="flex gap-2 items-center">
              <Button asChild>
                <NavLink href="/upload">Upload a PDF</NavLink>
              </Button>
              <span className="text-sm font-medium text-muted-foreground">
                Pro
              </span>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </SignedIn>
          <SignedOut>
            <NavLink
              href="/sign-in"
              className="hover:text-primary transition-colors text-sm font-medium"
            >
              Sign In
            </NavLink>
          </SignedOut>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
