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
  MessageCircle,
  Bot,
  Bell,
  CheckCircle,
  ArrowRight,
  Smartphone,
  BarChart3,
  Download,
  RefreshCcw,
  Shield,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Instant Orders to Invoices",
      description:
        "Seamlessly capture orders via WhatsApp or Telegram with instant, professional invoice generation.",
      icon: <MessageCircle className="h-12 w-12" />,
      details: [
        "Auto-generate GST-compliant invoices from confirmed orders no manual input needed.",
        "Accurate invoicing with real-time pricing, tax, and delivery details.",
        "Eliminate delays with real-time synchronization between order management and invoicing.",
        "Stay audit-ready with end-to-end traceability from order to invoice.",
      ],
      color: "primary",
    },
    {
      number: "02",
      title: "Real-Time Inventory, Auto Synced",
      description:
        "Automatically store invoices and sync inventory in real-time no manual input needed.",
      icon: <Bot className="h-12 w-12" />,
      details: [
        "Live stock updates on every sale.",
        "Prevent overselling with synced data across channels.",
        "Eliminate manual errors and stock mismatches.",
        "Get timely low-stock alerts for smooth restocking.",
      ],
      color: "accent",
    },
    {
      number: "03",
      title: "Smart Stock Alerts & Auto Restock",
      description:
        "Get low-stock alerts, auto-generate orders, and confirm purchases with a single tap.",
      icon: <RefreshCcw className="h-12 w-12" />,
      details: [
        "Auto-sync stock across sales channels",
        "Prevent overselling & stockouts",
        "Minimize manual updates",
        "Real-time low-stock alerts for timely restocking",
      ],
      color: "primary",
    },
  ];

  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description:
        "Upload invoices instantly from anywhere using your smartphone camera.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and SOC 2 compliance keep your data safe.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Intelligence",
      description: "Get insights into payment patterns and cash flow trends.",
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Smart Reminders",
      description:
        "Automated follow-ups via email and Telegram improve collection rates.",
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Easy Export",
      description:
        "Export to Google Sheets, Excel, or integrate with your existing tools.",
    },
  ];

  const integrations = [
    {
      name: "Telegram",
      description: "Primary interface for uploads and notifications",
    },
    {
      name: "Google Sheets",
      description: "Direct export of organized invoice data",
    },
    { name: "Email", description: "Professional reminder emails to clients" },
    { name: "n8n", description: "Powerful workflow automation engine" },
    {
      name: "PDF Processing",
      description: "Advanced OCR for document extraction",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Simplify Inventory.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Amplify Growth.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Turn chaotic stock tracking into a seamless, auto-synced inventory
            system all in three streamlined steps.
          </p>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">
                          Step {step.number}
                        </div>
                        <h2 className="text-3xl font-bold">{step.title}</h2>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <Card className="p-8 bg-gradient-card border-0 shadow-elegant hover-lift">
                      <div className="text-center space-y-6">
                        <div
                          className={`w-16 h-16 mx-auto rounded-3xl flex items-center justify-center ${
                            step.color === "primary"
                              ? "bg-gradient-primary"
                              : "bg-gradient-accent"
                          }`}
                        >
                          <div className="text-white">{step.icon}</div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xl text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-12">
                    <div className="w-px h-12 bg-gradient-to-b from-primary to-accent opacity-30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-24 bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-accent-soft text-accent">
              Platform Features
            </Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Everything you need for{" "}
              <span className="text-primary">invoice automation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed to streamline your entire invoice
              workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover-lift bg-gradient-card border-0 shadow-elegant group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-spring">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Works with your{" "}
              <span className="text-accent">favorite tools</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Seamlessly integrate with the tools you already use
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="hover-lift bg-gradient-card border-0 shadow-elegant transition-smooth"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{integration.name}</CardTitle>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="relative mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              automate
            </span>{" "}
            your workflow?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of businesses already saving time and improving cash
            flow with PJ Automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-primary transition-spring text-lg px-8 py-6"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover-lift text-lg px-8 py-6"
            >
              View Pricing
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
