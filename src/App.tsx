
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/flight-booking" element={<NotFound />} />
          <Route path="/holiday-packages" element={<NotFound />} />
          <Route path="/special-offers" element={<NotFound />} />
          <Route path="/my-booking" element={<NotFound />} />
          <Route path="/check-in" element={<NotFound />} />
          <Route path="/flight-status" element={<NotFound />} />
          <Route path="/destinations" element={<NotFound />} />
          <Route path="/travel-info" element={<NotFound />} />
          <Route path="/experience" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/press" element={<NotFound />} />
          <Route path="/careers" element={<NotFound />} />
          <Route path="/cargo" element={<NotFound />} />
          <Route path="/requirements" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/login" element={<NotFound />} />
          <Route path="/signup" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
