import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Pricing from "./Pricing"; // relative import from same folder
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Upload,
  Database,
  Bell,
  CheckCircle,
  Star,
  ArrowRight,
  MessageCircle,
  Mail,
  BarChart3,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

const Home = () => {
  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI-Powered Extraction",
      description:
        "Automatically extract invoice data with advanced AI recognition technology.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Organized Storage",
      description:
        "Keep all your invoice data organized and easily searchable in one place.",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Smart Reminders",
      description:
        "Automated payment reminders via Telegram and email to improve cash flow.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Business Reports",
      description:
        "Get insights into your payment patterns and business performance.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description:
        "Process invoices in seconds, not hours. Save time for what matters most.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Upload via Telegram",
      description:
        "Simply send your invoices through our Telegram bot - it's that easy!",
      icon: <MessageCircle className="h-8 w-8" />,
    },
    {
      number: "02",
      title: "Auto Extract Data",
      description:
        "Our AI instantly extracts all relevant data from your invoices with high accuracy.",
      icon: <Bot className="h-8 w-8" />,
    },
    {
      number: "03",
      title: "Organized Storage + Reminders",
      description:
        "Data is stored securely and reminders are sent automatically to ensure timely payments.",
      icon: <Database className="h-8 w-8" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      content:
        "PJ Automation saved me hours every week. My invoicing process is now completely hands-free!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Small Business Owner",
      content:
        "The reminder system helped us reduce late payments by 80%. Amazing ROI!",
      rating: 5,
    },
    {
      name: "Tech Solutions Inc.",
      role: "Mid-sized Company",
      content:
        "Self-hosted option gives us complete control. Perfect for our compliance requirements.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Simplify Operations.
                  </span>
                  <br />
                  <span className="text-foreground">Automate</span>
                  <br />
                  <span className="bg-gradient-accent bg-clip-text text-transparent">
                    What Matters.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  From invoicing and inventory to website creation and hosting
                  our AI-driven solutions help streamline your business. Choose
                  fully-managed services or self-hosted deployment with full
                  control and data privacy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-primary transition-spring text-lg px-8 py-6"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/pricing">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover-lift text-lg px-8 py-6"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
              <img
                src={heroImage}
                alt="PJ Automation Dashboard"
                className="relative rounded-3xl shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Simple. <span className="text-primary">Automated.</span>{" "}
              Effective.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started in minutes with our streamlined 3-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative hover-lift bg-gradient-card border-0 shadow-elegant"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-6xl font-bold text-primary/10">
                      {step.number}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Everything you need to{" "}
              <span className="text-accent">automate invoices</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover-lift bg-gradient-card border-0 shadow-elegant group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-spring">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-success/10 text-success border-success/20"
            >
              <Users className="w-4 h-4 mr-1" />
              Trusted by 500+ businesses
            </Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">
              What our customers say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover-lift bg-gradient-card border-0 shadow-elegant"
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="relative mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              automate
            </span>{" "}
            your invoices?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of businesses already saving time and improving cash
            flow
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
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
