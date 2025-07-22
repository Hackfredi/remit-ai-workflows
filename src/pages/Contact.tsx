import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  Send,
  Headphones,
  Users,
  HelpCircle,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Telegram Support",
      description: "Get instant help via our Telegram channel",
      action: "Message us on Telegram",
      link: "https://t.me",
      color: "primary",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Detailed support for complex issues",
      action: "support@pjautomation.com",
      link: "mailto:support@pjautomation.com",
      color: "accent",
    },
  ];

  const supportInfo = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Response Time",
      value: "Within 24 hours",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Support Team",
      value: "Expert automation engineers",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Timezone",
      value: "UTC+5:30 (IST)",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get set up?",
      answer:
        "For managed service, you can start uploading invoices within minutes. Self-hosted setups typically take 1-2 hours depending on your technical expertise.",
    },
    {
      question: "What file formats do you support?",
      answer:
        "We support all common formats including PDF, JPG, PNG, and HEIC. Our AI can extract data from photos taken with smartphones as well as scanned documents.",
    },
    {
      question: "Is there a limit on invoice size or complexity?",
      answer:
        "No limits on invoice complexity. Our AI handles multi-page invoices, multiple line items, and various international formats. File size limit is 10MB per invoice.",
    },
    {
      question: "Can I customize the reminder messages?",
      answer:
        "Yes! Pro and higher plans allow full customization of reminder templates, timing, and escalation workflows.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            We're here to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              help you
            </span>{" "}
            succeed
          </h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our team for support, questions, or custom
            solutions
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="hover-lift bg-gradient-card border-0 shadow-elegant group"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-spring ${
                      method.color === "primary"
                        ? "bg-gradient-primary"
                        : "bg-gradient-accent"
                    }`}
                  >
                    <div className="text-white">{method.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    variant="outline"
                    className="w-full hover-glow"
                    asChild
                  >
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Information */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <Headphones className="h-6 w-6 text-primary" />
                <span>Support Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {supportInfo.map((info, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                      <div className="text-primary">{info.icon}</div>
                    </div>
                    <div>
                      <div className="font-medium">{info.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Tell us about your needs and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input placeholder="Your Company Name" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell us more about your needs, current challenges, or questions..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-primary transition-spring">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* FAQs */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                  <HelpCircle className="h-6 w-6 text-accent" />
                  <span>Quick Answers</span>
                </h3>
                <p className="text-muted-foreground">
                  Find answers to common questions below
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-card border-0 shadow-elegant"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-primary text-primary-foreground border-0">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">
                    Need Enterprise Solutions?
                  </h4>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Contact us for custom integrations, volume pricing, and
                    dedicated support
                  </p>
                  <Button variant="secondary" size="sm">
                    Schedule Enterprise Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-8">Additional Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-lift bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Documentation</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive guides and API documentation
                </p>
                <Button variant="outline" size="sm">
                  View Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Community</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our community of automation enthusiasts
                </p>
                <Button variant="outline" size="sm">
                  Join Community
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Live Chat</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant help during business hours
                </p>
                <Button variant="outline" size="sm">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
