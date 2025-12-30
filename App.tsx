import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import IntakeForm from './components/IntakeForm';
import Pricing from './components/Pricing';
import Confirmation from './components/Confirmation';
import { FormData, Step, PlanType } from './types';

const INITIAL_DATA: FormData = {
  city: '',
  livingArrangement: 'Live-out',
  hoursNeeded: 'Full time',
  startDate: '',
  budget: '',
  whatsapp: '',
  email: '',
  specialRequirements: ''
};

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('hero');
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>(PlanType.PRIORITY);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const handleFormDataChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = () => {
    setIsProcessingPayment(true);
    // Simulate API call / Payment Gateway
    setTimeout(() => {
      setIsProcessingPayment(false);
      setStep('confirmation');
    }, 2000);
  };

  const resetFlow = () => {
    setStep('hero');
    setFormData(INITIAL_DATA);
    setSelectedPlan(PlanType.PRIORITY);
  };

  return (
    <div className="min-h-screen bg-[#071018] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0c1b2a] via-[#071018] to-[#000000] text-slate-200 selection:bg-green-500/30 font-sans">
      
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-white/5 bg-[#071018]/80">
        <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center text-white font-bold">E</div>
             <div className="leading-none">
               <strong className="block text-white">Expat Nanny Finder</strong>
               <span className="text-[10px] text-green-500 font-medium tracking-wider uppercase">South Africa</span>
             </div>
          </div>
          {step === 'hero' && (
             <button 
               onClick={() => setStep('intake')}
               className="text-sm font-semibold bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
             >
               Get Started
             </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 lg:py-16">
        
        {step === 'hero' && (
          <Hero onStart={() => setStep('intake')} />
        )}

        {step === 'intake' && (
          <IntakeForm 
            data={formData} 
            onChange={handleFormDataChange}
            onNext={() => setStep('pricing')}
            onBack={() => setStep('hero')}
          />
        )}

        {step === 'pricing' && (
          <Pricing 
            selectedPlan={selectedPlan}
            onSelectPlan={setSelectedPlan}
            onPay={handlePayment}
            onBack={() => setStep('intake')}
            isProcessing={isProcessingPayment}
          />
        )}

        {step === 'confirmation' && (
          <Confirmation 
            plan={selectedPlan} 
            email={formData.email}
            onReset={resetFlow}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-12 bg-[#050b11]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm mb-4">
            © {new Date().getFullYear()} Expat Nanny Finder — South Africa.
          </p>
          <div className="flex justify-center gap-6 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;