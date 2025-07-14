import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  CheckCircle, 
  X, 
  Star,
  Cloud,
  Download,
  Users,
  Shield,
  Headphones,
  ArrowRight,
  Zap
} from "lucide-react";

const Plans = () => {
  const [planType, setPlanType] = useState("managed");
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    { name: "Invoice Upload (Telegram)", managed: [20, 75, 200, "Unlimited"], selfHosted: ["✓", "✓", "✓", "✓"] },
    { name: "AI Data Extraction", managed: ["Basic", "Advanced", "Advanced", "Enterprise"], selfHosted: ["Basic", "Advanced", "Advanced", "Advanced"] },
    { name: "Data Storage", managed: ["Basic", "Advanced", "Advanced", "Enterprise"], selfHosted: ["Local", "Local", "Local", "Local"] },
    { name: "Google Sheets Export", managed: ["—", "✓", "✓", "✓"], selfHosted: ["—", "✓", "✓", "✓"] },
    { name: "Automated Reminders", managed: ["—", "✓", "✓", "✓"], selfHosted: ["—", "—", "✓", "✓"] },
    { name: "Email Reminders", managed: ["—", "✓", "✓", "✓"], selfHosted: ["—", "—", "✓", "✓"] },
    { name: "Telegram Reminders", managed: ["—", "✓", "✓", "✓"], selfHosted: ["—", "—", "✓", "✓"] },
    { name: "Business Reports", managed: ["—", "—", "✓", "✓"], selfHosted: ["—", "—", "—", "✓"] },
    { name: "Analytics Dashboard", managed: ["—", "—", "✓", "✓"], selfHosted: ["—", "—", "✓", "✓"] },
    { name: "Custom Integrations", managed: ["—", "—", "✓", "✓"], selfHosted: ["—", "✓", "✓", "✓"] },
    { name: "Priority Support", managed: ["—", "—", "✓", "✓"], selfHosted: ["—", "—", "✓", "✓"] },
    { name: "Setup Assistance", managed: ["—", "—", "—", "✓"], selfHosted: ["—", "—", "—", "✓"] },
    { name: "SLA Guarantee", managed: ["—", "—", "—", "✓"], selfHosted: ["—", "—", "—", "—"] },
    { name: "Custom Workflows", managed: ["—", "—", "—", "✓"], selfHosted: ["—", "—", "—", "✓"] },
    { name: "Data Sovereignty", managed: ["—", "—", "—", "—"], selfHosted: ["✓", "✓", "✓", "✓"] },
    { name: "Complete Source Code", managed: ["—", "—", "—", "—"], selfHosted: ["—", "✓", "✓", "✓"] }
  ];

  const managedPricing = [
    { name: "Basic", monthly: 19.99, annual: 191.90, inr: { monthly: 999, annual: 9590 } },
    { name: "Pro", monthly: 39.99, annual: 383.90, inr: { monthly: 1999, annual: 19190 } },
    { name: "Business", monthly: 79.99, annual: 767.90, inr: { monthly: 3999, annual: 38390 } },
    { name: "Enterprise", monthly: "Custom", annual: "Custom", inr: { monthly: "Custom", annual: "Custom" } }
  ];

  const selfHostedPricing = [
    { name: "Test Drive", price: 10, inr: 500 },
    { name: "Standard", price: 199, inr: 9999 },
    { name: "Pro", price: 399, inr: 18999 },
    { name: "Ultimate", price: 749, inr: 37499 }
  ];

  const currentPricing = planType === "managed" ? managedPricing : selfHostedPricing;

  const getFeatureValue = (feature, planIndex) => {
    const values = planType === "managed" ? feature.managed : feature.selfHosted;
    const value = values[planIndex];
    
    if (value === "✓") return <CheckCircle className="h-4 w-4 text-success mx-auto" />;
    if (value === "—") return <X className="h-4 w-4 text-muted-foreground mx-auto" />;
    return <span className="text-sm">{value}</span>;
  };

  const isPlanPopular = (index) => {
    return (planType === "managed" && index === 1) || (planType === "self-hosted" && index === 2);
  };

  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <Badge variant="secondary" className="bg-primary-soft text-primary">
            Plans Comparison
          </Badge>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Compare all <span className="bg-gradient-primary bg-clip-text text-transparent">features</span> side by side
          </h1>
          <p className="text-xl text-muted-foreground">
            Detailed comparison to help you choose the perfect plan for your needs
          </p>
        </div>
      </section>

      {/* Plan Type Toggle */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-4 p-2 bg-muted rounded-2xl">
            <button
              onClick={() => setPlanType("managed")}
              className={`p-6 rounded-xl transition-smooth text-left ${
                planType === "managed" 
                  ? "bg-background shadow-elegant" 
                  : "hover:bg-background/50"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Cloud className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">Managed Service</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fully managed cloud solution with automatic updates and maintenance
              </p>
            </button>
            
            <button
              onClick={() => setPlanType("self-hosted")}
              className={`p-6 rounded-xl transition-smooth text-left ${
                planType === "self-hosted" 
                  ? "bg-background shadow-elegant" 
                  : "hover:bg-background/50"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Download className="h-6 w-6 text-accent" />
                <span className="text-lg font-semibold">Self-Hosted</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Download and run on your infrastructure with complete control
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Annual Toggle for Managed */}
      {planType === "managed" && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mx-auto max-w-sm">
            <Card className="p-6 bg-gradient-card border-0 shadow-elegant">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Annual Billing</p>
                  <p className="text-sm text-muted-foreground">Save 20%</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`text-sm ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                    Monthly
                  </span>
                  <Switch 
                    checked={isAnnual} 
                    onCheckedChange={setIsAnnual}
                  />
                  <span className={`text-sm ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                    Yearly
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Comparison Table */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Card className="bg-gradient-card border-0 shadow-elegant overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-4 p-6 border-b bg-muted/50">
              <div className="col-span-1">
                <h3 className="font-semibold">Features</h3>
              </div>
              {currentPricing.map((plan, index) => (
                <div key={index} className="text-center">
                  <div className="space-y-2">
                    {isPlanPopular(index) && (
                      <Badge className="bg-gradient-primary mb-2">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    <h4 className="font-semibold text-lg">{plan.name}</h4>
                    {planType === "managed" ? (
                      <div className="space-y-1">
                        {typeof plan.monthly === "number" ? (
                          <>
                            <div className="text-2xl font-bold">
                              ${isAnnual ? (plan.annual / 12).toFixed(2) : plan.monthly}
                              <span className="text-sm text-muted-foreground font-normal">/mo</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              ₹{isAnnual ? Math.round(plan.inr.annual / 12) : plan.inr.monthly}/mo
                            </div>
                          </>
                        ) : (
                          <div className="text-2xl font-bold">Custom</div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="text-2xl font-bold">
                          ${plan.price}
                          <span className="text-sm text-muted-foreground font-normal"> once</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ₹{plan.inr} once
                        </div>
                      </div>
                    )}
                    <Button 
                      className={`w-full ${
                        isPlanPopular(index) 
                          ? "bg-gradient-primary hover:shadow-primary" 
                          : "hover-glow"
                      } transition-spring`}
                      variant={isPlanPopular(index) ? "default" : "outline"}
                      size="sm"
                    >
                      {plan.name === "Enterprise" || plan.name === "Custom" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            <div className="divide-y">
              {features.map((feature, featureIndex) => (
                <div key={featureIndex} className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/20 transition-smooth">
                  <div className="col-span-1 font-medium">
                    {feature.name}
                  </div>
                  {[0, 1, 2, 3].map((planIndex) => (
                    <div key={planIndex} className="text-center">
                      {getFeatureValue(feature, planIndex)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Plan Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why choose <span className="text-primary">{planType === "managed" ? "managed service" : "self-hosted"}</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {planType === "managed" ? (
              <>
                <Card className="hover-lift bg-gradient-card border-0 shadow-elegant text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Cloud className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Zero Maintenance</h3>
                    <p className="text-muted-foreground">
                      We handle all updates, backups, and infrastructure management
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift bg-gradient-card border-0 shadow-elegant text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Instant Setup</h3>
                    <p className="text-muted-foreground">
                      Start processing invoices within minutes of signing up
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift bg-gradient-card border-0 shadow-elegant text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Enterprise Security</h3>
                    <p className="text-muted-foreground">
                      SOC 2 compliant with 99.9% uptime guarantee
                    </p>
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                <Card className="hover-lift bg-gradient-card border-0 shadow-elegant text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Complete Control</h3>
                    <p className="text-muted-foreground">
                      Your data never leaves your infrastructure. Full customization available.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift bg-gradient-card border-0 shadow-elegant text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Download className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">One-Time Cost</h3>
                    <p className="text-muted-foreground">
                      Pay once, use forever. No recurring fees or usage limits.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift bg-gradient-card border-0 shadow-elegant text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Custom Integrations</h3>
                    <p className="text-muted-foreground">
                      Modify workflows to integrate with any existing system or API.
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-bold">
            Ready to get started with <span className="bg-gradient-primary bg-clip-text text-transparent">PJ Automation</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your business and start automating today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-primary transition-spring">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="hover-lift">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;