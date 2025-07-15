import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HelpCircle,
  MessageCircle,
  Mail,
  Search,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const FAQs = () => {
  const faqCategories = [
    {
      name: "General",
      icon: <HelpCircle className="h-5 w-5" />,
      faqs: [
        {
          question: "What is PJ Automation?",
          answer:
            "PJ Automation is an AI-driven invoice processing and reminder automation platform powered by n8n. We offer both fully-managed cloud services and downloadable self-hosted workflow packages for businesses that want to automate their invoice management.",
        },
        {
          question: "How does the AI extraction work?",
          answer:
            "Our AI uses advanced OCR and machine learning to extract key data from invoices including client information, amounts, due dates, line items, and payment terms. The system has 99%+ accuracy and continuously learns to improve extraction quality.",
        },
        {
          question: "What file formats are supported?",
          answer:
            "We support all common formats including PDF, JPG, PNG, HEIC, and TIFF. You can upload invoices via smartphone photos, scanned documents, or digital PDFs. There's a 10MB limit per file.",
        },
        {
          question: "Is my data secure?",
          answer:
            "Absolutely. We use enterprise-grade encryption, are SOC 2 compliant, and never share your data. For self-hosted solutions, your data never leaves your infrastructure, giving you complete control and privacy.",
        },
      ],
    },
    {
      name: "Pricing & Plans",
      icon: <CheckCircle className="h-5 w-5" />,
      faqs: [
        {
          question: "What's the difference between managed and self-hosted?",
          answer:
            "Managed service is our cloud-based solution where we handle all infrastructure, maintenance, and updates. Self-hosted workflows are downloadable n8n packages you run on your own servers, giving you complete control but requiring technical setup.",
        },
        {
          question: "Can I switch between monthly and annual billing?",
          answer:
            "Yes! You can switch to annual billing anytime to get the 20% discount. If you're on annual billing, you can switch back to monthly at your next renewal period.",
        },
        {
          question: "What happens if I exceed my plan limits?",
          answer:
            "For managed plans, additional invoices beyond your plan limit are charged at ₹49 each. We'll notify you via email and Telegram before any overages occur. You can also upgrade your plan anytime to avoid overage fees.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 14-day free trial for managed services, so you can test everything risk-free. For self-hosted workflows, we have a 30-day money-back guarantee if the workflows don't work as described.",
        },
      ],
    },
    {
      name: "Technical",
      icon: <Search className="h-5 w-5" />,
      faqs: [
        {
          question:
            "What are the system requirements for self-hosted workflows?",
          answer:
            "You need n8n v1.0+, Node.js 18+, and depending on the package: PostgreSQL/MySQL and Redis. Minimum 2GB RAM recommended.",
        },
        {
          question: "How do I integrate with my existing systems?",
          answer:
            "Our workflows support webhooks, REST APIs, and direct database connections. Popular integrations include Google Sheets, Slack, Microsoft Teams, QuickBooks, and custom CRM systems. Enterprise plans include custom integration support.",
        },
        {
          question: "Can I customize the reminder templates?",
          answer:
            "Yes! Pro and higher plans allow full customization of reminder email templates, timing schedules, and escalation workflows. You can create different templates for different client types or industries.",
        },
        {
          question: "How reliable is the service?",
          answer:
            "For self-hosted solutions, reliability depends on your infrastructure, but our workflows are designed to be fault-tolerant and include error handling.",
        },
      ],
    },
    {
      name: "Support",
      icon: <MessageCircle className="h-5 w-5" />,
      faqs: [
        {
          question: "What support channels are available?",
          answer:
            "We offer support via Telegram (fastest) and email. Response times: Basic plans get standard support (24-48 hours), Pro plans get priority support (12-24 hours), Enterprise gets dedicated support (4-8 hours).",
        },
        {
          question: "Do you provide setup assistance?",
          answer:
            "Yes! Setup assistance is included with Ultimate self-hosted packages. For other plans, we offer paid setup assistance starting at $99 for basic setup. This includes video calls, custom configuration, and initial training.",
        },
        {
          question: "Is training included?",
          answer:
            "Basic documentation and video tutorials are included with all plans. Enterprise and Ultimate plans include personalized training sessions. We also have a community forum and comprehensive knowledge base.",
        },
        {
          question: "How do I get help during implementation?",
          answer:
            "Start with our comprehensive documentation and video guides. For immediate help, reach out via Telegram for fastest response. Enterprise customers get dedicated Slack channels or can schedule regular check-in calls.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <Badge variant="secondary" className="bg-primary-soft text-primary">
            <HelpCircle className="w-4 h-4 mr-1" />
            Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Get{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              answers
            </span>{" "}
            to common questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about PJ Automation, from setup to
            advanced features
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-6xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <div className="text-primary-foreground">{category.icon}</div>
                </div>
                <h2 className="text-2xl font-bold">{category.name}</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {category.faqs.map((faq, faqIndex) => (
                  <Card
                    key={faqIndex}
                    className="hover-lift bg-gradient-card border-0 shadow-elegant"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg leading-relaxed">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {faq.answer}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16 bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-bold">
            Still have <span className="text-accent">questions</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Our support team is here to help you get the most out of PJ
            Automation
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-lift bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Telegram Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant help via our Telegram support channel
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Channel
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Send detailed questions to our support team
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:support@pjautomation.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our team during business hours
                </p>
                <Button variant="outline" size="sm">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8">
            Popular Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-lift bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-primary" />
                  <span>Setup Guides</span>
                </CardTitle>
                <CardDescription>
                  Step-by-step instructions for getting started with both
                  managed and self-hosted solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  <span>Community Forum</span>
                </CardTitle>
                <CardDescription>
                  Connect with other users, share tips, and get community
                  support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Join Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Best Practices</span>
                </CardTitle>
                <CardDescription>
                  Learn how to optimize your invoice automation workflow for
                  maximum efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Read Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <span>Video Tutorials</span>
                </CardTitle>
                <CardDescription>
                  Watch detailed video tutorials covering setup, configuration,
                  and advanced features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Watch Videos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
