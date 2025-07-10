import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import AllClients from "./pages/AllClients";
import AllServices from "./pages/AllServices";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import ScrollTop from "./components/ScrollTop ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollTop /> {/* ✅ أضفناه هنا قبل الـ Routes */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/clients" element={<AllClients />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
