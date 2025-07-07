import { FileText, Mail, Twitter, Github, Linkedin } from "lucide-react";
import NavLink from "./nav-link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-screen-2xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="size-6 text-primary" />
              <span className="font-bold text-xl">Summonary</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Transform lengthy PDFs into clear, accurate summaries in seconds
              with our advanced AI technology.
            </p>
            <div className="flex items-center gap-4">
              <NavLink
                href="mailto:contact@summonary.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Contact via email"
              >
                <Mail className="size-5" />
              </NavLink>
              <NavLink
                href="https://twitter.com/summonary"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow on Twitter"
              >
                <Twitter className="size-5" />
              </NavLink>
              <NavLink
                href="https://github.com/summonary"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="size-5" />
              </NavLink>
              <NavLink
                href="https://linkedin.com/company/summonary"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="size-5" />
              </NavLink>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink
                  href="/features"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/pricing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/api"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  API
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/changelog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Changelog
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink
                  href="/help"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Help Center
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/documentation"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentation
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/status"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Status
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/feedback"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Feedback
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground md:flex-row md:gap-4">
              <p>&copy; {currentYear} Summonary. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <NavLink
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </NavLink>
                <NavLink
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </NavLink>
                <NavLink
                  href="/cookies"
                  className="hover:text-primary transition-colors"
                >
                  Cookie Policy
                </NavLink>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Made with ❤️ for better productivity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
