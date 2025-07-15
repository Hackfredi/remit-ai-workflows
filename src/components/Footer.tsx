import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, MessageCircle, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "How It Works", path: "/how-it-works" },
      { name: "Pricing", path: "/pricing" },
      { name: "Download", path: "/download" },
      { name: "Plans Comparison", path: "/plans" },
    ],
    support: [
      { name: "Contact", path: "/contact" },
      { name: "FAQs", path: "/faqs" },
      { name: "Documentation", path: "#" },
      { name: "Community", path: "#" },
    ],
    company: [
      { name: "About", path: "#" },
      { name: "Blog", path: "#" },
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
    ],
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PJ Automation
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              AI-driven invoice processing and reminder automation. Streamline
              your workflow and get paid faster.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:support@pjautomation.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2024 PJ Automation. All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <span>Built with</span>
                <a
                  href="https://n8n.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 hover:text-foreground transition-smooth"
                >
                  <span className="font-medium">n8n</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
