import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Invoice from "@/pages/Invoice";
import Inventory from "@/pages/Inventory";
import Pricing from "@/pages/Pricing";
import Plans from "@/pages/Plans";
import Hosting from "@/pages/Hosting & Inventory";
import FAQs from "@/pages/FAQs";
import Contact from "@/pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<Invoice />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/download" element={<Hosting />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
