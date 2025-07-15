import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download as DownloadIcon,
  CheckCircle,
  Code,
  Server,
  Shield,
  Zap,
  FileText,
  Settings,
  ArrowRight,
  ExternalLink,
  Cloud,
} from "lucide-react";

const Download = () => {
  const workflows = [
    {
      name: "Basic Test Drive",
      price: "$10 / ₹500",
      description: "Core demo workflow to test basic functionality",
      features: [
        "Invoice upload via Telegram",
        "Basic AI data extraction",
        "Simple data storage",
        "Setup documentation",
        "Community support",
      ],
      limitations: [
        "No automated reminders",
        "Limited extraction accuracy",
        "Basic documentation only",
      ],
      downloadSize: "2.1 MB",
      requirements: "n8n v1.0+",
      popular: false,
    },
    {
      name: "Standard",
      price: "$199 / ₹9,999",
      description: "Complete extraction and storage system",
      features: [
        "Advanced AI extraction",
        "Structured data storage",
        "Google Sheets export",
        "Webhook integrations",
        "Comprehensive documentation",
        "Email support included",
      ],
      limitations: ["No automated reminders", "Standard support response time"],
      downloadSize: "8.7 MB",
      requirements: "n8n v1.0+, Node.js 18+",
      popular: false,
    },
    {
      name: "Pro",
      price: "$399 / ₹18,999",
      description: "Full automation with smart reminders",
      features: [
        "Complete extraction workflow",
        "Advanced data storage",
        "Automated reminder system",
        "Multi-channel notifications",
        "Custom reminder templates",
        "Analytics dashboard",
        "Priority email support",
      ],
      limitations: [],
      downloadSize: "15.3 MB",
      requirements: "n8n v1.0+, Node.js 18+, Redis",
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$749 / ₹37,499",
      description: "Enterprise package with setup assistance",
      features: [
        "Complete extraction workflow",
        "Advanced data storage",
        "Automated reminder system",
        "Custom integrations",
        "Personal setup guide",
        "30-day setup assistance",
        "Priority support",
        "Custom workflow modifications",
      ],
      limitations: [],
      downloadSize: "22.1 MB",
      requirements: "n8n v1.0+, Node.js 18+, Redis, PostgreSQL",
      popular: false,
    },
  ];

  const technicalSpecs = [
    {
      icon: <Server className="h-5 w-5" />,
      title: "Self-Hosted",
      description: "Complete control over your data and infrastructure",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure",
      description: "No data leaves your servers. Full privacy guaranteed",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Fast Setup",
      description: "Get running in under 30 minutes with our guides",
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Customizable",
      description: "Modify workflows to fit your exact business needs",
    },
  ];

  const requirements = [
    "n8n workflow automation platform (v1.0 or higher)",
    "Node.js 18+ runtime environment",
    "PostgreSQL or MySQL database (Pro/Ultimate)",
    "Redis for caching (Pro/Ultimate)",
    "Telegram Bot API access",
    "Email service (SMTP) for reminders",
    "Minimum 2GB RAM, 4GB recommended",
  ];

  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <Badge variant="secondary" className="bg-accent-soft text-accent">
            <DownloadIcon className="w-4 h-4 mr-1" />
            Self-Hosted Workflows
          </Badge>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Download
            </span>{" "}
            and deploy <br />
            on your infrastructure
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get complete control with our self-hosted n8n workflows. Perfect for
            teams that need custom integrations and data sovereignty.
          </p>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <Card
                key={index}
                className="text-center hover-lift bg-gradient-card border-0 shadow-elegant"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-accent-foreground">{spec.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-2">{spec.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Packages */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Choose your <span className="text-accent">workflow package</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              One-time purchase. Lifetime access. Free updates for 1 year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflows.map((workflow, index) => (
              <Card
                key={index}
                className={`relative hover-lift transition-spring ${
                  workflow.popular
                    ? "ring-2 ring-accent bg-gradient-card border-accent/20 scale-105"
                    : "bg-gradient-card border-0"
                } shadow-elegant`}
              >
                {workflow.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-accent">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{workflow.name}</CardTitle>
                  <div className="text-2xl font-bold text-accent">
                    {workflow.price}
                  </div>
                  <CardDescription className="min-h-[3rem] flex items-center">
                    {workflow.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-2">
                    {workflow.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Details */}
                  <div className="text-xs text-muted-foreground space-y-1 border-t pt-4">
                    <div>Size: {workflow.downloadSize}</div>
                    <div>Requires: {workflow.requirements}</div>
                  </div>

                  <Button
                    className={`w-full ${
                      workflow.popular
                        ? "bg-gradient-accent hover:shadow-accent"
                        : "hover-glow"
                    } transition-spring`}
                    variant={workflow.popular ? "default" : "outline"}
                  >
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Purchase & Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16 bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">System Requirements</h2>
            <p className="text-muted-foreground">
              Make sure your environment meets these requirements before
              purchasing
            </p>
          </div>

          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Technical Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Setup Assistance */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Need <span className="text-primary">setup assistance</span>?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our team can help you get up and running quickly with
                personalized setup assistance, custom configurations, and
                ongoing support.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>One-on-one setup session via video call</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Custom configuration for your workflow</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>30 days of priority email support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Custom integrations and modifications</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-primary transition-spring"
                >
                  Get Setup Help
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="hover-lift">
                  Schedule Consultation
                </Button>
              </div>
            </div>

            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle>Setup Assistance Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Basic Setup (1-2 hours)</span>
                  <span className="font-semibold">$99 / ₹4,999</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Standard Setup (3-4 hours)</span>
                  <span className="font-semibold">$199 / ₹9,999</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Enterprise Setup (Full day)</span>
                  <span className="font-semibold">$499 / ₹24,999</span>
                </div>
                <div className="text-sm text-muted-foreground mt-4">
                  * Included free with Ultimate workflow package
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oracle Cloud Callout */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-success/5 border-success/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-success">
                  Runs on Oracle Cloud Free Tier
                </span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                All our workflows are optimized to run efficiently on Oracle
                Cloud's Always Free tier, giving you enterprise-grade
                infrastructure at zero cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a
                    href="https://oracle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn about Oracle Cloud
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Setup Guide
                    <FileText className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold">
            Ready to deploy your{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              automation
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground">
            Download our workflows and start automating your invoice processing
            today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-accent hover:shadow-accent transition-spring"
            >
              <DownloadIcon className="mr-2 h-5 w-5" />
              Browse Workflows
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
