import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  CheckCircle,
  X,
  Star,
  ArrowRight,
  Users,
  Shield,
  Headphones,
  Zap,
  Download,
  Cloud,
} from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("managed");

  const managedPlans = [
    {
      name: "Basic",
      description: "Perfect for freelancers and small businesses",
      monthlyPrice: 19.99,
      yearlyPrice: 191.9,
      monthlyPriceINR: 999,
      yearlyPriceINR: 9590,
      features: [
        "20 invoices per month",
        "AI data extraction",
        "Basic storage",
        "Email support",
        "₹49 per additional invoice",
      ],
      limitations: [
        "No automated reminders",
        "No business reports",
        "Standard support only",
      ],
      popular: false,
    },
    {
      name: "Pro",
      description: "Most popular for growing businesses",
      monthlyPrice: 39.99,
      yearlyPrice: 383.9,
      monthlyPriceINR: 1999,
      yearlyPriceINR: 19190,
      features: [
        "75 invoices per month",
        "AI data extraction",
        "Automated reminders",
        "Advanced storage",
        "Email + Telegram support",
        "Export to Google Sheets",
      ],
      limitations: ["No business reports", "Standard support response"],
      popular: true,
    },
    {
      name: "Business",
      description: "Advanced features for scaling companies",
      monthlyPrice: 79.99,
      yearlyPrice: 767.9,
      monthlyPriceINR: 3999,
      yearlyPriceINR: 38390,
      features: [
        "200 invoices per month",
        "AI data extraction",
        "Automated reminders",
        "Business reports & analytics",
        "Priority support",
        "Export to Google Sheets",
        "Custom integrations",
      ],
      limitations: [],
      popular: false,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      monthlyPrice: null,
      yearlyPrice: null,
      monthlyPriceINR: null,
      yearlyPriceINR: null,
      features: [
        "Unlimited invoices",
        "AI data extraction",
        "Automated reminders",
        "Advanced analytics",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "Custom workflows",
      ],
      limitations: [],
      popular: false,
    },
  ];

  const selfHostedPlans = [
    {
      name: "Basic Test Drive",
      description: "Try core features with basic workflow",
      price: 10,
      priceINR: 500,
      features: [
        "Core demo workflow",
        "Basic invoice extraction",
        "Setup documentation",
        "Community support",
      ],
      limitations: [
        "No reminders",
        "No advanced features",
        "Limited documentation",
      ],
      popular: false,
    },
    {
      name: "Standard",
      description: "Full extraction and storage capabilities",
      price: 199,
      priceINR: 9999,
      features: [
        "Complete extraction workflow",
        "Advanced data storage",
        "Export integrations",
        "Detailed documentation",
        "Email support",
      ],
      limitations: ["No automated reminders", "Standard support only"],
      popular: false,
    },
    {
      name: "Pro",
      description: "Everything including automated reminders",
      price: 399,
      priceINR: 18999,
      features: [
        "Complete extraction workflow",
        "Advanced data storage",
        "Automated reminder system",
        "Export integrations",
        "Comprehensive documentation",
        "Priority email support",
      ],
      limitations: [],
      popular: true,
    },
    {
      name: "Ultimate",
      description: "Complete package with setup assistance",
      price: 749,
      priceINR: 37499,
      features: [
        "Complete extraction workflow",
        "Advanced data storage",
        "Automated reminder system",
        "Export integrations",
        "Personal setup guide",
        "Priority support",
        "30-day setup assistance",
      ],
      limitations: [],
      popular: false,
    },
  ];

  const currentPlans =
    selectedPlan === "managed" ? managedPlans : selfHostedPlans;

  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Choose the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              perfect plan
            </span>{" "}
            for your business
          </h1>
          <p className="text-xl text-muted-foreground">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Plan Type Toggle */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-4 p-2 bg-muted rounded-2xl">
            <button
              onClick={() => setSelectedPlan("managed")}
              className={`p-6 rounded-xl transition-smooth text-left ${
                selectedPlan === "managed"
                  ? "bg-background shadow-elegant"
                  : "hover:bg-background/50"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Cloud className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">Managed Service</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fully managed cloud solution. We handle everything for you.
              </p>
            </button>

            <button
              onClick={() => setSelectedPlan("self-hosted")}
              className={`p-6 rounded-xl transition-smooth text-left ${
                selectedPlan === "self-hosted"
                  ? "bg-background shadow-elegant"
                  : "hover:bg-background/50"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Download className="h-6 w-6 text-accent" />
                <span className="text-lg font-semibold">
                  Self-Hosted Workflows
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Download and run on your own n8n server. Complete control.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Annual/Monthly Toggle for Managed Plans */}
      {selectedPlan === "managed" && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mx-auto max-w-sm">
            <Card className="p-6 bg-gradient-card border-0 shadow-elegant">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Annual Billing</p>
                  <p className="text-sm text-muted-foreground">Save 20%</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`text-sm ${
                      !isAnnual ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    Monthly
                  </span>
                  <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
                  <span
                    className={`text-sm ${
                      isAnnual ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    Yearly
                  </span>
                </div>
              </div>
              {isAnnual && (
                <Badge
                  variant="secondary"
                  className="mt-3 bg-success/10 text-success border-success/20"
                >
                  Save 20% with annual plans
                </Badge>
              )}
            </Card>
          </div>
        </section>
      )}

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover-lift transition-spring ${
                  plan.popular
                    ? "ring-2 ring-primary bg-gradient-card border-primary/20 scale-105"
                    : "bg-gradient-card border-0"
                } shadow-elegant`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="min-h-[3rem] flex items-center">
                    {plan.description}
                  </CardDescription>

                  <div className="space-y-2">
                    {selectedPlan === "managed" ? (
                      plan.monthlyPrice ? (
                        <>
                          <div className="text-3xl font-bold">
                            $
                            {isAnnual
                              ? plan.yearlyPrice / 12
                              : plan.monthlyPrice}
                            <span className="text-sm text-muted-foreground font-normal">
                              /month
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ₹
                            {isAnnual
                              ? Math.round(plan.yearlyPriceINR / 12)
                              : plan.monthlyPriceINR}
                            /month
                          </div>
                          {isAnnual && (
                            <div className="text-xs text-success">
                              Save $
                              {(
                                plan.monthlyPrice * 12 -
                                plan.yearlyPrice
                              ).toFixed(2)}
                              /year
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-3xl font-bold">Custom</div>
                      )
                    ) : (
                      <>
                        <div className="text-3xl font-bold">
                          ${plan.price}
                          <span className="text-sm text-muted-foreground font-normal">
                            {" "}
                            one-time
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ₹{plan.priceINR} one-time
                        </div>
                      </>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}

                    {plan.limitations && plan.limitations.length > 0 && (
                      <>
                        {plan.limitations.map((limitation, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-3 opacity-60"
                          >
                            <X className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {limitation}
                            </span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-primary hover:shadow-primary"
                        : "hover-glow"
                    } transition-spring`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.monthlyPrice || plan.price
                      ? "Get Started"
                      : "Contact Sales"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  {selectedPlan === "managed" && index === 0 && (
                    <p className="text-xs text-center text-muted-foreground">
                      14-day free trial included
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">
                SOC 2 compliant with end-to-end encryption
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto">
                <Headphones className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Get help when you need it via email and Telegram
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg">
                  Can I switch plans anytime?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time.
                  Changes take effect immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg">
                  What happens if I exceed my plan limits?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For managed plans, additional invoices are charged at ₹49
                  each. We'll notify you before any overages.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg">Is my data secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. We use enterprise-grade encryption and are SOC 2
                  compliant. Your data is never shared.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you offer setup assistance?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Setup assistance is included in Ultimate self-hosted
                  plan, or available as paid add-on for other plans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
